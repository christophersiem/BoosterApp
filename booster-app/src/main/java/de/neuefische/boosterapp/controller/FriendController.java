package de.neuefische.boosterapp.controller;

import de.neuefische.boosterapp.model.dto.FriendListDto;
import de.neuefische.boosterapp.service.FriendService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/friends")
public class FriendController {
    private final FriendService friendService;

    public FriendController(FriendService friendService) {
        this.friendService = friendService;
    }

    @PostMapping
    public void addUserAsFriend(@RequestBody FriendListDto friendData) {
        friendService.addUserAsFriend(friendData.getUserName(), friendData.getFriend());
    }

    @DeleteMapping
    public void deleteFriend(@RequestBody FriendListDto friendListDto) {
        friendService.deleteFriend(friendListDto);
    }


}
