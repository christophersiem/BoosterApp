package de.neuefische.boosterapp.controller;

import de.neuefische.boosterapp.model.AddBoosterDto;
import de.neuefische.boosterapp.model.Booster;
import de.neuefische.boosterapp.model.BoosterType;
import de.neuefische.boosterapp.service.BoosterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    public List<Booster> getCreatedBooster(@RequestParam(required = false) String username) {
        return boosterService.getCreatedBooster(username);
    }

    @GetMapping("{id}")
    public Optional<Booster> getBoosterById(@PathVariable String id) {
        return boosterService.getBoosterById(id);
    }


    @GetMapping("{type}/{owner}")
    public String getRandomIdFromType(@PathVariable BoosterType type, @PathVariable String owner) {
        return boosterService.getRandomIdFromType(type, owner);
    }

    @PostMapping
    public Booster addNewBooster(@RequestBody @Valid AddBoosterDto data) {
        return boosterService.addNewBooster(data);
    }

    @DeleteMapping("{id}")
    public void deleteBooster(@PathVariable String id) {
        boosterService.deleteBooster(id);
    }
}
