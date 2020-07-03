package de.neuefische.boosterapp.db;

import de.neuefische.boosterapp.model.Booster;
import de.neuefische.boosterapp.model.BoosterType;
import org.springframework.stereotype.Repository;


import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

import static de.neuefische.boosterapp.model.BoosterType.CONFIDENCE;
import static de.neuefische.boosterapp.model.BoosterType.JOY;
import static de.neuefische.boosterapp.model.BoosterType.CALM;

@Repository
public class BoosterDb {

    private static final List<Booster> boosterList = new ArrayList<>(List.of(
            new Booster("1", JOY,"My first booster", "JOY MESSAGE 1", null, null),
            new Booster("2", CONFIDENCE,"My second booster", null, "https://www.youtube.com/watch?v=kzSBrJmXqdg", null),
            new Booster("3", CALM,"My third booster", "CALM MESSAGE 1", null, null),
            new Booster("4", CONFIDENCE,"My fourth booster", "CONFIDENCE MESSAGE 1", null, null),
            new Booster("5", JOY,"My fifth booster", "JOY MESSAGE 2", null, null),
            new Booster("6", CALM,"My sixth booster", "CALM MESSAGE 2", null, null)

    ));

    public static Booster addNewBooster(Booster booster) {
        booster.setId(UUID.randomUUID().toString());
        boosterList.add(booster);
        return booster;
    }


    public List<Booster> getBooster() {
        return boosterList;
    }

    public void deleteBooster(String id) {
        boosterList.removeIf(booster -> booster.getId().equals(id));
    }

    public Booster getRandomBoosterOfType(BoosterType randomBoost) {
        List<Booster> list = new ArrayList<>();
        for (Booster booster : boosterList) {
            if (booster.getType().equals(randomBoost)) {
                list.add(booster);
            }
        }
        Random rand = new Random();
        return list.get(rand.nextInt(list.size()));

    }
}
