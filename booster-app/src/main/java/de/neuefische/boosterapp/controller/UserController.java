package de.neuefische.boosterapp.controller;

import de.neuefische.boosterapp.model.BoosterUser;
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
    public void register (@RequestBody BoosterUser user){
        userService.register(user);
    }



}
