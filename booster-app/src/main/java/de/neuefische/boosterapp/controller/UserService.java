package de.neuefische.boosterapp.controller;

import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.BoosterUser;
import de.neuefische.boosterapp.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserDb userDb;
    private final IdUtils idUtils;
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    public UserService(UserDb userDb , IdUtils idUtils) {
        this.userDb = userDb;
        this.idUtils = idUtils;
    }

    public void register (BoosterUser user){
        String codedPw = encoder.encode(user.getPassword());
        user.setPassword(codedPw);
        user.setId(idUtils.generateRandomId());
        user.setRole("user");
        userDb.save(user);
    }
}
