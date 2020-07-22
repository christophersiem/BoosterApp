package de.neuefische.boosterapp.service;

import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.BoosterUser;
import de.neuefische.boosterapp.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService {

    private final UserDb userDb;
    private final IdUtils idUtils;
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    public UserService(UserDb userDb, IdUtils idUtils) {
        this.userDb = userDb;
        this.idUtils = idUtils;
    }


    public void register(BoosterUser user) {
        String codedPw = encoder.encode(user.getPassword());
        user.setPassword(codedPw);
        user.setId(idUtils.generateRandomId());
        user.setRole("user");
        userDb.save(user);
    }

    public BoosterUser findUserByUsername(String username) {
        return userDb.findByUsername(username);
    }


    public void addUserAsFriend(String usernameToAdd, String userId) {

        BoosterUser userToAdd = userDb.findByUsername(usernameToAdd);
        List listToBeModified = userToAdd.getFriends();
        System.out.println(listToBeModified);
    }


//    public List getFriendListByUserId(String userId) {
//        BoosterUser user = userDb.findById(userId);
//        return user.getFriends();
//    }
//

}
