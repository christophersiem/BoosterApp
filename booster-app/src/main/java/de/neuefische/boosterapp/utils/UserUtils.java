package de.neuefische.boosterapp.utils;

import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.BoosterUser;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;
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
        BoosterUser user = getUserByUsername(creatorUserName);
        int numberCreatedUpdate = user.getCreatedBooster() + 1;
        user.setCreatedBooster(numberCreatedUpdate);
        userDb.save(user);

    }

    public BoosterUser getUserByUsername(String username) {
        Optional<BoosterUser> optionalBoosterUser = userDb.findByUsername(username);
        if (optionalBoosterUser.isPresent()) {
            return optionalBoosterUser.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User with username " + username + " does not exist.");
    }
}

