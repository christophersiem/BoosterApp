package de.neuefische.boosterapp.controller;


import de.neuefische.boosterapp.service.FriendService;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("api/friends")
public class FriendController {
    private final FriendService friendService;

    public FriendController(FriendService friendService) {
        this.friendService = friendService;
    }

    @PostMapping
    public void addUserAsFriend(@RequestBody String friendToAdd, Principal principal) {
        friendService.addUserAsFriend(friendToAdd,principal.getName());
    }

    @DeleteMapping
    public void deleteFriend(@RequestBody String friendToDelete, Principal principal) {
        friendService.deleteFriend(friendToDelete, principal.getName());
    }


}

