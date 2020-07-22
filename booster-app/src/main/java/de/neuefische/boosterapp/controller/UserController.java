package de.neuefische.boosterapp.controller;

import de.neuefische.boosterapp.model.BoosterUser;
import de.neuefische.boosterapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping
    public BoosterUser findUserByUsername(@RequestParam String username){
        return userService.findUserByUsername(username);
    }

    @PostMapping ("/addfriend")
    public void addUserAsFriend(String usernameToAdd, String userId){
        userService.addUserAsFriend(usernameToAdd, userId);
    }

//    @GetMapping("/friends")
//    public List getFriendListByUserId(@RequestParam String userId){
//        return userService.getFriendListByUserId(userId);
//    }
//





}
