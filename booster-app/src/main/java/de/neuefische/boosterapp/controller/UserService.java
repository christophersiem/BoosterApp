package de.neuefische.boosterapp.controller;

import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.BoosterUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserDb userDb;
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    public UserService(UserDb userDb) {
        this.userDb = userDb;
    }

    public void register (BoosterUser user){
        String encodedPw = encoder.encode(user.getPassword());
        user.setPassword(encodedPw);
        userDb.save(user);
    }
}
