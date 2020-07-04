package de.neuefische.boosterapp.service;

import de.neuefische.boosterapp.db.BoosterDb;
import de.neuefische.boosterapp.model.Booster;
import de.neuefische.boosterapp.model.BoosterType;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Data
public class BoosterService {

    @Autowired
    public BoosterService(BoosterDb boosterDb) {
        this.boosterDb = boosterDb;
    }

    public final BoosterDb boosterDb;
    public List<Booster> getBooster() {
        return boosterDb.getBooster();
    }

    public Booster addNewBooster(Booster booster) {
        return BoosterDb.addNewBooster(booster);
    }

    public void deleteBooster(String id) {
        boosterDb.deleteBooster(id);
    }

    public Booster getRandomBoosterOfType(BoosterType randomBoost, String ownerId) {
        return boosterDb.getRandomBoosterOfType(randomBoost, ownerId);
    }

    public List<Booster> getCreatedBooster(String creatorId) {
       return boosterDb.getCreatedBooster(creatorId);

    }
}
