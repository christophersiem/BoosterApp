package de.neuefische.boosterapp.service;

import de.neuefische.boosterapp.db.BoosterMongoDb;
import de.neuefische.boosterapp.model.AddBoosterDto;
import de.neuefische.boosterapp.model.Booster;
import de.neuefische.boosterapp.model.BoosterType;
import de.neuefische.boosterapp.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.*;


@Service

public class BoosterService {

    private final BoosterMongoDb boosterDb;
    private final IdUtils idUtils;
    private final MongoTemplate mongoTemplate;

    @Autowired
    public BoosterService(BoosterMongoDb boosterDb, IdUtils idUtils, MongoTemplate mongoTemplate) {
        this.boosterDb = boosterDb;
        this.idUtils = idUtils;
        this.mongoTemplate = mongoTemplate;
    }

    public Booster addNewBooster(AddBoosterDto data) {
        Booster booster = new Booster();
        booster.setId(idUtils.generateRandomId());
        booster.setName(data.getName());
        booster.setCreator(data.getCreator());
        booster.setMessage(data.getMessage());
        booster.setOwner(data.getOwner());
        booster.setSpotifyLink(data.getSpotifyLink());
        booster.setYoutubeLink(data.getYoutubeLink());
        booster.setType(data.getType());
        return boosterDb.save(booster);
    }

    public void deleteBooster(String id) {
        boosterDb.deleteById(id);
    }

    public String getIdFromRandomBooster(BoosterType randomBoost, String owner) {
        MatchOperation matchStage = Aggregation.match(new Criteria("type").is(randomBoost));
        MatchOperation matchStageOwner = Aggregation.match(new Criteria("owner").is(owner));
        Aggregation aggregation = Aggregation.newAggregation(matchStageOwner, matchStage, Aggregation.sample(1));
        AggregationResults<Booster> output = mongoTemplate.aggregate(aggregation, "booster", Booster.class);
        return output.getUniqueMappedResult().getId();

    }

    public List<Booster> getCreatedBooster(String creator) {
        return boosterDb.findByCreator(creator);

    }

    public Optional <Booster> getBoosterById(String id) {
        return boosterDb.findById(id);
    }
}
