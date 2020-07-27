package de.neuefische.boosterapp.utils;

import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.BoosterUser;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserUtils {
    private final UserDb userDb;

    public UserUtils(UserDb userDb) {
        this.userDb = userDb;
    }

    public String generateRandomId() {
        return UUID.randomUUID().toString();
    }


    public void increaseBoosterCounter(String creatorUserName) {
        BoosterUser user = userDb.findByUsername(creatorUserName);
        int numberCreatedUpdate= user.getCreatedBooster() + 1;
        user.setCreatedBooster(numberCreatedUpdate);
        userDb.save(user);

    }
}

