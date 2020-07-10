package de.neuefische.boosterapp.service;

import de.neuefische.boosterapp.db.BoosterMongoDb;
import de.neuefische.boosterapp.model.Booster;
import de.neuefische.boosterapp.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

//    public Booster getRandomBooster(BoosterType randomBoost, String ownerId) {
//        boosterDb.findAll()
//
//    }

    public List<Booster> getCreatedBooster(String creator) {
        return boosterDb.findByCreator(creator);

    }
}
