package de.neuefische.boosterapp.service;

import de.neuefische.boosterapp.model.BoosterUser;
import de.neuefische.boosterapp.model.dto.UserDataDto;
import de.neuefische.boosterapp.utils.UserUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDataService {
    private final UserUtils userUtils;

    @Autowired
    public UserDataService(UserUtils userUtils) {
        this.userUtils = userUtils;
    }

    public UserDataDto getUserNumbers(String username) {
        UserDataDto userDataDto = new UserDataDto();
        BoosterUser user = userUtils.getUserByUsername(username);
        userDataDto.setCreatedBooster(user.getCreatedBooster());
        userDataDto.setFriends(user.getFriends());

        return userDataDto;
    }
}
