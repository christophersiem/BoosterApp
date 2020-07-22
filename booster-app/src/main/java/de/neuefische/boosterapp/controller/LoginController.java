package de.neuefische.boosterapp.controller;
import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.BoosterUser;
import de.neuefische.boosterapp.model.LoginData;
import de.neuefische.boosterapp.security.JWTUtils;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RequestMapping("auth/login")
@RestController
public class LoginController {

    private final AuthenticationManager authenticationManager;
    private final JWTUtils jwtUtils;
    private final UserDb userDb;


    public LoginController(AuthenticationManager authenticationManager, JWTUtils jwtUtils, UserDb userDb) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.userDb = userDb;
    }

    @PostMapping
    public String login(@RequestBody LoginData data){
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(data.getUsername(), data.getPassword()));
            HashMap<String, Object> tokenData = getUserTokenData(data.getUsername());

            return jwtUtils.createToken(tokenData, data.getUsername());
        }catch (Exception e){

            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials");
        }
    }

    private HashMap<String, Object> getUserTokenData(String username) {
        Optional<BoosterUser> userOptional = userDb.findById(username);
        BoosterUser boosterUser = userOptional.get();

        return new HashMap<>(Map.of("firstName", boosterUser.getFirstName(), "userName",boosterUser.getUsername(), "id",boosterUser.getId()));
    }
}
