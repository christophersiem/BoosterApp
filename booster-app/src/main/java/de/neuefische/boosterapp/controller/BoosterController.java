package de.neuefische.boosterapp.controller;

import de.neuefische.boosterapp.model.Booster;
import de.neuefische.boosterapp.model.BoosterType;
import de.neuefische.boosterapp.service.BoosterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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


    @PutMapping("list")
    public Booster getRandomBooster(@RequestParam  String owner, @RequestBody BoosterType randomBoost) {
        return boosterService.getRandomBooster(randomBoost,owner);
    }

    @PutMapping
    public Booster addNewBooster(@RequestBody Booster booster) {
        return boosterService.addNewBooster(booster);
    }

    @DeleteMapping("{id}")
    public void deleteBooster(@PathVariable String id) {
        boosterService.deleteBooster(id);
    }
}
