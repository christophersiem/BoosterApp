package de.neuefische.boosterapp.controller;

import de.neuefische.boosterapp.model.BoosterUser;
import de.neuefische.boosterapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RequestMapping("auth/register")
@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void register(@RequestBody BoosterUser user) {
        userService.register(user);
    }

    @DeleteMapping("{username}")
    public void deleteAccount(@PathVariable String username) {
        userService.deleteAccount(username);
    }



}
