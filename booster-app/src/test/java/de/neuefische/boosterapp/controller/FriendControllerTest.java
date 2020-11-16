package de.neuefische.boosterapp.controller;

import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.BoosterUser;
import de.neuefische.boosterapp.model.LoginData;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;


import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class FriendControllerTest {
    @LocalServerPort
    public int port;
    @Autowired
    public PasswordEncoder encoder;
    @Autowired
    public UserDb userDb;
    @Autowired
    public TestRestTemplate restTemplate;

    private String loginUser() {

        BoosterUser user = new BoosterUser("1", "chris2020", encoder.encode("!!21*QqwW"), "hannes", "test@test.de", "user", 0, Arrays.asList("paula", "hannes"));
        userDb.save(user);

        String loginUrl = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(loginUrl, new LoginData("chris2020", "!!21*QqwW"), String.class);
        return tokenResponse.getBody();
    }

    @Test
    public void addUserAsFriendShouldAddUserToFriendslist(){

        //GIVEN
        BoosterUser user = BoosterUser.builder().id("2").username("paula").friends(Arrays.asList("Fridolin")).build();
        userDb.save(user);
        String token = loginUser();
        String url = "http://localhost:" + port + "/api/friends";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<String> requestEntity = new HttpEntity<>("paula", headers);

        //WHEN
        ResponseEntity<Void> postResponse = restTemplate.exchange(url, HttpMethod.POST, requestEntity, Void.class);

        //THEN
        assertEquals(HttpStatus.OK, postResponse.getStatusCode());
        assertTrue(userDb.findByUsername("paula").get().getFriends().contains("chris2020"));
        assertTrue(userDb.findByUsername("chris2020").get().getFriends().contains("paula"));
    }

    @Test
    public void deleteUserAsFriendShouldRemoveUserFromFriendslist(){

        //GIVEN
        BoosterUser user = BoosterUser.builder().id("2").username("paula").friends(Arrays.asList("hannes", "chris2020")).build();
        userDb.save(user);
        String token = loginUser();
        String url = "http://localhost:" + port + "/api/friends";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<String> requestEntity = new HttpEntity<>("paula", headers);

        //WHEN
        ResponseEntity<Void> postResponse = restTemplate.exchange(url, HttpMethod.DELETE, requestEntity, Void.class);

        //THEN
        assertEquals(HttpStatus.OK, postResponse.getStatusCode());
        assertFalse(userDb.findByUsername("paula").get().getFriends().contains("chris2020"));
        assertFalse(userDb.findByUsername("chris2020").get().getFriends().contains("paula"));
    }



}