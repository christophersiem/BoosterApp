package de.neuefische.boosterapp.controller;

import de.neuefische.boosterapp.model.Booster;
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
    public List<Booster> getBooster(){
        return boosterService.getBooster();
    }

    @PutMapping
    public Booster addNewBooster(@RequestBody Booster booster){
        return boosterService.addNewBooster(booster);
    }
}
