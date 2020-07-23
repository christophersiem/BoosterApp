package de.neuefische.boosterapp.service;

import de.neuefische.boosterapp.db.BoosterMongoDb;
import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.Booster;
import de.neuefische.boosterapp.model.BoosterType;
import de.neuefische.boosterapp.model.BoosterUser;
import de.neuefische.boosterapp.model.dto.AddBoosterDto;
import de.neuefische.boosterapp.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


@Service

public class BoosterService {

    private final BoosterMongoDb boosterDb;
    private final IdUtils idUtils;
    private final MongoTemplate mongoTemplate;
    private final UserDb userDb;


    @Autowired
    public BoosterService(UserDb userDb, BoosterMongoDb boosterDb, IdUtils idUtils, MongoTemplate mongoTemplate) {
        this.boosterDb = boosterDb;
        this.idUtils = idUtils;
        this.mongoTemplate = mongoTemplate;
        this.userDb = userDb;
    }

    public static String getYoutubeId(String url) {
        String pattern = "https?:\\/\\/(?:[0-9A-Z-]+\\.)?(?:youtu\\.be\\/|youtube\\.com\\S*[^\\w\\-\\s])([\\w\\-]{11})(?=[^\\w\\-]|$)(?![?=&+%\\w]*(?:['\"][^<>]*>|<\\/a>))[?=&+%\\w]*";

        Pattern compiledPattern = Pattern.compile(pattern,
                Pattern.CASE_INSENSITIVE);
        Matcher matcher = compiledPattern.matcher(url);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return null;
    }


    public Booster addNewBooster(AddBoosterDto data) {
        Booster booster = new Booster();
        booster.setId(idUtils.generateRandomId());
        booster.setName(data.getName());
        booster.setCreator(data.getCreator());
        booster.setCreatorName(data.getCreatorName());
        booster.setMessage(data.getMessage());
        booster.setOwner(data.getOwner());
        booster.setSpotifyLink(data.getSpotifyLink());
        booster.setYoutubeLink(getYoutubeId(data.getYoutubeLink()));
        booster.setImage(data.getImage());
        booster.setType(data.getType());
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
