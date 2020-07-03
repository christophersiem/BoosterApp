package de.neuefische.boosterapp.service;

import de.neuefische.boosterapp.db.BoosterDb;
import de.neuefische.boosterapp.model.Booster;
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
}
