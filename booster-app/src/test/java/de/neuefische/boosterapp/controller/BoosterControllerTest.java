package de.neuefische.boosterapp.controller;

import de.neuefische.boosterapp.db.BoosterMongoDb;
import de.neuefische.boosterapp.db.UserDb;
import de.neuefische.boosterapp.model.Booster;
import de.neuefische.boosterapp.model.BoosterUser;
import de.neuefische.boosterapp.model.LoginData;
import de.neuefische.boosterapp.model.dto.AddBoosterDto;
import de.neuefische.boosterapp.utils.UserUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.Optional;

import static de.neuefische.boosterapp.model.BoosterType.JOY;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class BoosterControllerTest {

    @LocalServerPort
    public int port;

    @MockBean
    private UserUtils userUtils;

    @Autowired
    public PasswordEncoder encoder;

    @Autowired
    public UserDb userDb;

    @Autowired
    public TestRestTemplate restTemplate;

    @Autowired
    private BoosterMongoDb boosterDv;

    @BeforeEach
    public void resetDatabase() {
        boosterDv.deleteAll();
        userDb.deleteAll();
    }

    private String loginUser() {

        BoosterUser user = new BoosterUser("1", "chris2020", encoder.encode("!!21*QqwW"), "hannes", "test@test.de", "user", 0, Arrays.asList("123", "234"));
        userDb.save(user);

        String loginUrl = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(loginUrl, new LoginData("chris2020", "!!21*QqwW"), String.class);
        return tokenResponse.getBody();
    }


    @Test
    public void addNewBoosterShouldAddBooster() {
        //GIVEN
        String token = loginUser();
        when(userUtils.generateRandomId()).thenReturn("random-id");
        AddBoosterDto booster = new AddBoosterDto(JOY, "2", "chris2020", "Chris", "chris2020", "TollerBooster", "Hallo", "https://www.youtube.com/watch?v=ekIMGAmgXSI", "");
        String url = "http://localhost:" + port + "/api/booster";

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<AddBoosterDto> requestEntity = new HttpEntity<>(booster, headers);

        //WHEN
        ResponseEntity<Booster> postResponse = restTemplate.exchange(url, HttpMethod.POST, requestEntity, Booster.class);

        //THEN
        Booster expectedBooster = new Booster("random-id", JOY, "chris2020", "Chris", "chris2020", "TollerBooster", "Hallo", "ekIMGAmgXSI", "");
        assertEquals(HttpStatus.OK, postResponse.getStatusCode());
        assertNotNull(postResponse.getBody());
        assertEquals(expectedBooster, postResponse.getBody());

        Optional<Booster> byId = boosterDv.findById("random-id");
        assertTrue(byId.isPresent());
        assertEquals(byId.get(), expectedBooster);
    }

    @Test
    public void deleteBooster() {
        //GIVEN
        String token = loginUser();

        boosterDv.save(new Booster("", JOY, "2", "2", "TestBooster", "hello", "Hallo", "www.youtube.com", ""));
        boosterDv.save(new Booster("", JOY, "2", "2", "TestBooster", "hello", "Hallo", "www.youtube.com", ""));

        //WHEN
        String url = "http://localhost:" + port + "/api/booster/2";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity entity = new HttpEntity(headers);
        restTemplate.exchange(url, HttpMethod.DELETE, entity, Void.class);

        //THEN
        assertTrue(boosterDv.findById("2").isEmpty());
    }

    @Test
    public void getBoosterById() {
        //GIVEN
        String token = loginUser();
        boosterDv.save(new Booster("1", JOY, "2", "2", "TestBooster", "hello", "Hallo", "www.youtube.com/ekIMGAmgXSI", ""));
        boosterDv.save(new Booster("2", JOY, "2", "2", "TestBooster", "hello", "Hallo", "www.youtube.com/ekIMGAmgXSI", ""));

        //WHEN
        String url = "http://localhost:" + port + "/api/booster/2";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<Booster> response = restTemplate.exchange(url, HttpMethod.GET, entity, Booster.class);

        //THEN
        assertEquals(response.getStatusCode(), HttpStatus.OK);
        assertEquals(response.getBody(), new Booster("2", JOY, "2", "2", "TestBooster", "hello", "Hallo", "www.youtube.com/ekIMGAmgXSI", ""));
    }

//    @Test
//    public void getBoosterByCreator() {
//        //GIVEN
//        String token = loginUser();
//        when(userUtils.generateRandomId()).thenReturn("random-id");
//        when(userUtils.getUserByUsername("chris2020")).thenReturn(new BoosterUser("chris2020", "chris2020", "!!21*QqwW", "Chris", "chris@mail.de", "user", 2, Arrays.asList("123", "234")));
//        boosterDv.save(new Booster("1", JOY, "klaus999", "Klaus", "klaus999", "hello", "Hallo", "www.youtube.com/ekIMGAmgXSI", ""));
//        boosterDv.save(new Booster("2", JOY, "chris2020", "Chris", "chris2020", "hello", "Hallo", "www.youtube.com/ekIMGAmgXSI", ""));
//
//
//        //WHEN
//        String url = "http://localhost:" + port + "/api/booster?creatorUserName=chris2020";
//        HttpHeaders headers = new HttpHeaders();
//        headers.setBearerAuth(token);
//        HttpEntity entity = new HttpEntity(headers);
//        ResponseEntity<Booster> response = restTemplate.exchange(url, HttpMethod.GET, entity, Booster.class);
//
//        //THEN
//
//        assertEquals(
//                new Booster("2", JOY, "2", "2", "2", "hello", "Hallo", "www.youtube.com/ekIMGAmgXSI", "")
//                ,response.getBody()
//        );
//    }
}