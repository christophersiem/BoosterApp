package de.neuefische.boosterapp.service;

import de.neuefische.boosterapp.db.BoosterMongoDb;
import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.Booster;
import de.neuefische.boosterapp.model.BoosterType;
import de.neuefische.boosterapp.model.BoosterUser;
import de.neuefische.boosterapp.model.dto.AddBoosterDto;
import de.neuefische.boosterapp.utils.UserUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.List;
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


    public Booster addNewBooster(AddBoosterDto data) {
        Booster booster = new Booster();
        booster.setId(userUtils.generateRandomId());
        booster.setName(data.getName());
        booster.setCreator(data.getCreator());
        booster.setCreatorName(data.getCreatorName());
        booster.setMessage(data.getMessage());
        booster.setOwner(data.getOwner());
        booster.setYoutubeLink(getYoutubeId(data.getYoutubeLink()));
        booster.setImage(data.getImage());
        booster.setType(data.getType());
        userUtils.increaseBoosterCounter(data.getCreator());
        return boosterDb.save(booster);
    }

    public void deleteBooster(String id) {
        boosterDb.deleteById(id);
    }

    public String getRandomIdFromType(BoosterType type, String owner) {
        MatchOperation matchStage = Aggregation.match(new Criteria("type").is(type));
        MatchOperation matchStageOwner = Aggregation.match(new Criteria("owner").is(owner));
        Aggregation aggregation = Aggregation.newAggregation(matchStageOwner, matchStage, Aggregation.sample(1));
        AggregationResults<Booster> output = mongoTemplate.aggregate(aggregation, "booster", Booster.class);
        return output.getUniqueMappedResult().getId();

    }

    public List<Booster> getCreatedBooster(String creatorUserName) {
        BoosterUser user = userDb.findByUsername(creatorUserName);
        String userId = user.getId();
        return boosterDb.findByCreator(userId);
    }

    public Optional <Booster> getBoosterById(String id) {
        return boosterDb.findById(id);
    }
}
