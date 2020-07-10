package de.neuefische.boosterapp.service;

import de.neuefische.boosterapp.db.BoosterMongoDb;
import de.neuefische.boosterapp.model.Booster;
import de.neuefische.boosterapp.model.BoosterType;
import de.neuefische.boosterapp.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service

public class BoosterService {

    private final BoosterMongoDb boosterDb;
    private final IdUtils idUtils;

    @Autowired
    public BoosterService(BoosterMongoDb boosterDb, IdUtils idUtils) {
        this.boosterDb = boosterDb;
        this.idUtils = idUtils;
    }

    public Booster addNewBooster(Booster booster) {
        booster.setId(idUtils.generateRandomId());
        return boosterDb.save(booster);
    }

    public void deleteBooster(String id) {
        boosterDb.deleteById(id);
    }

    public Booster getRandomBooster(BoosterType randomBoost, String owner) {
        List<Booster> list = new ArrayList<>();
        List<Booster> response = boosterDb.findByOwnerAndType(owner, randomBoost);
        for (Booster booster : response) {
            if (booster.getOwner().equals(owner) && booster.getType().equals(randomBoost)) {
                list.add(booster);
            }
        }
        Random rand = new Random();
        return list.get(rand.nextInt(list.size()));

    }

    public List<Booster> getCreatedBooster(String creator) {
        return boosterDb.findByCreator(creator);

    }
}
