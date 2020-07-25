package de.neuefische.boosterapp.utils;

import de.neuefische.boosterapp.db.UserDb;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserUtils {
    private final UserDb userDb;

    public UserUtils(UserDb userDb) {
        this.userDb = userDb;
    }

    public String generateRandomId(){
        return UUID.randomUUID().toString();
    }

    public void increaseBoosterCounter(String creatorId){
        MatchOperation matchStageId = Aggregation.match(new Criteria("creatorId").is(creatorId));
        Aggregation aggregation = Aggregation.newAggregation(matchStageId, Aggregation.sample(1));
    }
}


//    public String getRandomIdFromType(BoosterType type, String owner) {
//        MatchOperation matchStage = Aggregation.match(new Criteria("type").is(type));
//        MatchOperation matchStageOwner = Aggregation.match(new Criteria("owner").is(owner));
//        Aggregation aggregation = Aggregation.newAggregation(matchStageOwner, matchStage, Aggregation.sample(1));
//        AggregationResults<Booster> output = mongoTemplate.aggregate(aggregation, "booster", Booster.class);
//        return output.getUniqueMappedResult().getId();
//
//    }