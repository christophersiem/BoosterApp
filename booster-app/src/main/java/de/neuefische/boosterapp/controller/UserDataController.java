package de.neuefische.boosterapp.controller;

import de.neuefische.boosterapp.model.dto.UserDataDto;
import de.neuefische.boosterapp.service.UserDataService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RequestMapping("api/data")
@RestController
public class UserDataController {

    private final UserDataService userDataService;

    public UserDataController(UserDataService userDataService) {
        this.userDataService = userDataService;
    }

    @GetMapping
    public UserDataDto getUserNumbers(Principal principal) {
        return userDataService.getUserNumbers(principal.getName());
    }
}
