package de.neuefische.boosterapp.service;

import de.neuefische.boosterapp.db.BoosterMongoDb;
import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.Booster;
import de.neuefische.boosterapp.model.BoosterUser;
import de.neuefische.boosterapp.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import static de.neuefische.boosterapp.model.BoosterType.*;


@Service
public class UserService {

    private final UserDb userDb;
    private final IdUtils idUtils;
    private final BoosterMongoDb boosterMongoDb;
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    public UserService(UserDb userDb, IdUtils idUtils, BoosterMongoDb boosterMongoDb) {
        this.userDb = userDb;
        this.idUtils = idUtils;
        this.boosterMongoDb = boosterMongoDb;
    }

    public void register(BoosterUser user) {
        String codedPw = encoder.encode(user.getPassword());
        user.setPassword(codedPw);
        String randomId = idUtils.generateRandomId();
        user.setId(randomId);
        user.setRole("user");
        userDb.save(user);
        createStandardBooster(randomId);
    }

    public void createStandardBooster(String ownerId){
        boosterMongoDb.save((new Booster(idUtils.generateRandomId(), JOY, "1b764dc5-9bf2-455c-9563-6ff54d0b5b9d", "MoodBoost", ownerId, "Smile", "Life is short. Smile while you still have teeth :-)", "ekIMGAmgXSI","https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830.jpg")));
        boosterMongoDb.save((new Booster(idUtils.generateRandomId(), CALM, "1b764dc5-9bf2-455c-9563-6ff54d0b5b9d", "MoodBoost", ownerId, "Relax", "“You are the sky. Everything else – it’s just the weather. (Pema Chödrön)” ", "7maJOI3QMu0", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80")));
        boosterMongoDb.save((new Booster(idUtils.generateRandomId(), CONFIDENCE, "1b764dc5-9bf2-455c-9563-6ff54d0b5b9d", "MoodBoost", ownerId, "Focus", "Confidence awakens Confidence.", "ktRTWMX3M&t","https://images.unsplash.com/photo-1545281011-95796d6f27ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80")));
    }

//    public void addUserAsFriend(String usernameToAdd, String userId) {
//
//        BoosterUser userToAdd = userDb.findByUsername(usernameToAdd);
//        List listToBeModified = userToAdd.getFriends();
//        System.out.println(listToBeModified);
//    }


//    public List getFriendListByUserId(String userId) {
//        BoosterUser user = userDb.findById(userId);
//        return user.getFriends();
//    }
//

}
