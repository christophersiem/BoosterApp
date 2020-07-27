package de.neuefische.boosterapp.service;


import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.BoosterUser;
import de.neuefische.boosterapp.model.dto.UserDataDto;
import de.neuefische.boosterapp.utils.BoosterUtils;
import de.neuefische.boosterapp.utils.UserUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;



@Service
public class UserService {

    private final UserDb userDb;
    private final UserUtils userUtils;
    private final BoosterUtils boosterUtils;
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    public UserService(UserDb userDb, UserUtils userUtils, BoosterUtils boosterUtils) {
        this.userDb = userDb;
        this.userUtils = userUtils;
        this.boosterUtils = boosterUtils;
    }

    public void register(BoosterUser user) {
        String codedPw = encoder.encode(user.getPassword());
        user.setPassword(codedPw);
        String randomId = userUtils.generateRandomId();
        user.setId(randomId);
        user.setRole("user");
        user.setEmail(user.getEmail());
        user.setCreatedBooster(0);
        List<String> friends = new ArrayList<>(List.of());
        user.setFriends(friends);
        userDb.save(user);
        boosterUtils.createStandardBooster(randomId);
    }


    public void deleteAccount(String username) {
        userDb.deleteById(username);
    }



    public UserDataDto getUserNumbers(String username) {
        UserDataDto userDataDto = new UserDataDto();
        BoosterUser user = userUtils.getUserByUsername(username);
        userDataDto.setCreatedBooster(user.getCreatedBooster());
        userDataDto.setFriends(user.getFriends());

      return userDataDto;
    }
}

