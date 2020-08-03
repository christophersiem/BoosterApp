package de.neuefische.boosterapp.service;

import de.neuefische.boosterapp.db.BoosterMongoDb;
import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.Booster;
import de.neuefische.boosterapp.model.BoosterType;
import de.neuefische.boosterapp.utils.UserUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import static de.neuefische.boosterapp.utils.BoosterUtils.getYoutubeId;


@Service

public class BoosterService {

    private final BoosterMongoDb boosterDb;
    private final UserUtils userUtils;
    private final MongoTemplate mongoTemplate;
    private final UserDb userDb;


    @Autowired
    public BoosterService(UserDb userDb, BoosterMongoDb boosterDb, UserUtils userUtils, MongoTemplate mongoTemplate) {
        this.boosterDb = boosterDb;
        this.userUtils = userUtils;
        this.mongoTemplate = mongoTemplate;
        this.userDb = userDb;
    }


    public Booster addNewBooster(String name, String creatorName, String message, String owner, String youtube, String image, BoosterType type, String user) {
        Booster booster = new Booster();
        booster.setId(userUtils.generateRandomId());
        booster.setName(name);
        booster.setCreatorName(creatorName);
        booster.setMessage(message);
        booster.setOwnerUsername(owner);
        booster.setYoutubeLink(getYoutubeId(youtube));
        booster.setImage(image);
        booster.setType(type);
        booster.setCreator(user);
        userUtils.increaseBoosterCounter(user);

        return boosterDb.save(booster);
    }

    public void deleteBooster(String id) {
        boosterDb.deleteById(id);
    }

    public String getRandomIdFromType(BoosterType type, String owner) {
        MatchOperation matchStage = Aggregation.match(new Criteria("type").is(type));
        MatchOperation matchStageOwner = Aggregation.match(new Criteria("ownerUsername").is(owner));
        Aggregation aggregation = Aggregation.newAggregation(matchStageOwner, matchStage, Aggregation.sample(1));
        AggregationResults<Booster> output = mongoTemplate.aggregate(aggregation, "booster", Booster.class);
        return Objects.requireNonNull(output.getUniqueMappedResult()).getId();

    }

    public List<Booster> getBoosterByCreator(String creatorUserName) {

        return boosterDb.findByCreator(creatorUserName);
    }

    public Optional<Booster> getBoosterById(String id) {
        return boosterDb.findById(id);
    }
}
