package de.neuefische.boosterapp.db;

import de.neuefische.boosterapp.model.Booster;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

import static de.neuefische.boosterapp.model.BoosterType.CONFIDENCE;
import static de.neuefische.boosterapp.model.BoosterType.JOY;

@Repository
public class BoosterDb {

    private List<Booster> boosterList = new ArrayList<>(List.of(
            new Booster("1",JOY, "Enjoy", null, null),
            new Booster("2",CONFIDENCE, null, "https://www.youtube.com/watch?v=kzSBrJmXqdg", null)

    ));


    public List<Booster> getBooster() {
        return boosterList;
    }
}
