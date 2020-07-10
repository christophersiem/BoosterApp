package de.neuefische.boosterapp.controller;

import de.neuefische.boosterapp.model.Booster;
import de.neuefische.boosterapp.service.BoosterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("api/booster")
public class BoosterController {

    public final BoosterService boosterService;

    @Autowired
    public BoosterController(BoosterService boosterService) {
        this.boosterService = boosterService;
    }

    @GetMapping
    public List<Booster> getCreatedBooster(@RequestParam (required = false) String creator) {
        return boosterService.getCreatedBooster(creator);
    }


//    @PutMapping("{ownerId}/random")
//    public Booster getRandomBoosterOfType(@PathVariable String ownerId, @RequestBody BoosterType randomBoost) {
//        return boosterService.getRandomBooster(randomBoost, ownerId);
//    }

    @PutMapping
    public Booster addNewBooster(@RequestBody Booster booster) {
        return boosterService.addNewBooster(booster);
    }

    @DeleteMapping("{id}")
    public void deleteBooster(@PathVariable String id) {
        boosterService.deleteBooster(id);
    }
}
