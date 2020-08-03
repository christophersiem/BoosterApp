package de.neuefische.boosterapp.controller;

import de.neuefische.boosterapp.model.LoginData;
import de.neuefische.boosterapp.security.JWTUtils;
import de.neuefische.boosterapp.utils.LoginUtils;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;

@RequestMapping("auth/login")
@RestController
public class LoginController {

    private final AuthenticationManager authenticationManager;
    private final JWTUtils jwtUtils;
    private final LoginUtils loginUtils;


    public LoginController(AuthenticationManager authenticationManager, JWTUtils jwtUtils, LoginUtils loginUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.loginUtils = loginUtils;
    }

    @PostMapping
    public String login(@RequestBody LoginData data) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(data.getUsername(), data.getPassword()));
            HashMap<String, Object> tokenData = loginUtils.getUserTokenData(data.getUsername());

            return jwtUtils.createToken(tokenData, data.getUsername());
        } catch (Exception e) {

            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials");
        }
    }


}
