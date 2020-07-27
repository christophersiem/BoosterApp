package de.neuefische.boosterapp.utils;

import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.BoosterUser;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class LoginUtils {
    public LoginUtils(UserDb userDb) {
        this.userDb = userDb;
    }

    private final UserDb userDb;

    public HashMap<String, Object> getUserTokenData(String username) {
        Optional<BoosterUser> userOptional = userDb.findById(username);
        BoosterUser boosterUser = userOptional.get();

        return new HashMap<>(Map.of("firstName", boosterUser.getFirstName(), "userName",boosterUser.getUsername(), "id",boosterUser.getId(),"email",boosterUser.getEmail(),"createdBooster",boosterUser.getCreatedBooster(),"friends",boosterUser.getFriends()));
    }
}
