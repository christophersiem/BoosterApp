package de.neuefische.boosterapp.service;

import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.BoosterUser;
import de.neuefische.boosterapp.model.dto.FriendListDto;
import de.neuefische.boosterapp.utils.UserUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


@Service
public class FriendService {
    private final UserDb userDb;
    private final UserUtils userUtils;

    public FriendService(UserDb userDb, UserUtils userUtils) {
        this.userDb = userDb;
        this.userUtils = userUtils;
    }

    public void addUserAsFriend(String username, String friendToAdd) {

        BoosterUser firstUser = userUtils.getUserByUsername(username);
        BoosterUser secondUser= userUtils.getUserByUsername(friendToAdd);

        if(firstUser.equals(secondUser)){
            throw new ResponseStatusException(HttpStatus.CONFLICT);
        } else {

            List firstListToModify = firstUser.getFriends();
            firstListToModify.add(friendToAdd);
            List secondListToModify = secondUser.getFriends();
            secondListToModify.add(username);
            userDb.save(firstUser);
            userDb.save(secondUser);
        }


    }

    public void deleteFriend(FriendListDto friendListDto) {
        BoosterUser firstUser = userUtils.getUserByUsername(friendListDto.getUserName());
        List FirstListToModify = firstUser.getFriends();
        FirstListToModify.remove(friendListDto.getFriend());

        BoosterUser secondUser = userUtils.getUserByUsername(friendListDto.getFriend());
        List SecondListToModify = secondUser.getFriends();
        SecondListToModify.remove(friendListDto.getUserName());

        userDb.save(firstUser);
        userDb.save(secondUser);
    }
}
