//package de.neuefische.boosterapp.controller;
//
//import de.neuefische.boosterapp.db.BoosterMongoDb;
//import de.neuefische.boosterapp.db.UserDb;
//import de.neuefische.boosterapp.model.Booster;
//import de.neuefische.boosterapp.model.BoosterUser;
//import de.neuefische.boosterapp.model.LoginData;
//import de.neuefische.boosterapp.utils.IdUtils;
//import org.junit.jupiter.api.BeforeEach;
//import java.util.List;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.boot.web.server.LocalServerPort;
//import org.springframework.http.*;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import java.util.Optional;
//import static de.neuefische.boosterapp.model.BoosterType.JOY;
//import static org.junit.jupiter.api.Assertions.*;
//import static org.mockito.Mockito.when;
//
//
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//class BoosterControllerTest {
//
//    @LocalServerPort
//    public int port;
//
//    @MockBean
//    private IdUtils idUtils;
//
//    @Autowired
//    public PasswordEncoder encoder;
//
//    @Autowired
//    public UserDb userDb;
//
//    @Autowired
//    public TestRestTemplate restTemplate;
//
//    @Autowired
//    private BoosterMongoDb db;
//
//    @BeforeEach
//    public void resetDatabase() {
//        db.deleteAll();
//        userDb.deleteAll();
//    }
//
//    private String loginUser() {
//        String savePassword = "hallo234";
//        BoosterUser user = new BoosterUser("1", "chris2020", encoder.encode(savePassword),1, "Markus", "test@test.de", "user");
//        userDb.save(user);
//
//        String loginUrl = "http://localhost:" + port + "/auth/login";
//        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(loginUrl, new LoginData("chris2020", "hallo234"), String.class);
//        return tokenResponse.getBody();
//    }
//
//
//    @Test
//    public void addNewBoosterShouldAddBooster() {
//        //GIVEN
//        String token = loginUser();
//        when(idUtils.generateRandomId()).thenReturn("random-id");
//        Booster booster = new Booster("", JOY, "2", "2", "TestBooster", "hello", "", "");
//        String url = "http://localhost:" + port + "/api/booster";
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setBearerAuth(token);
//        HttpEntity<Booster> requestEntity = new HttpEntity<>(booster, headers);
//
//        //WHEN
//        ResponseEntity<Booster> postResponse = restTemplate.exchange(url, HttpMethod.POST, requestEntity, Booster.class);
//
//        //THEN
//        Booster expectedBooster = new Booster("random-id", JOY, "2", "2", "TestBooster", "hello", "", "");
//        assertEquals(HttpStatus.OK, postResponse.getStatusCode());
//        assertNotNull(postResponse.getBody());
//        assertEquals(expectedBooster, postResponse.getBody());
//
//        Optional<Booster> byId = db.findById("random-id");
//        assertTrue(byId.isPresent());
//        assertEquals(byId.get(), expectedBooster);
//    }
//
//    @Test
//    public void deleteBooster(){
//        //GIVEN
//        String token = loginUser();
//
//        db.save(new Booster("1", JOY, "2", "2", "1Booster", "hello123", "", ""));
//        db.save(new Booster("2", JOY, "2", "2", "3Booster", "hello999", "", "test"));
//
//        //WHEN
//        String url = "http://localhost:" + port + "/api/booster/2";
//        HttpHeaders headers = new HttpHeaders();
//        headers.setBearerAuth(token);
//        HttpEntity entity = new HttpEntity(headers);
//        restTemplate.exchange(url,HttpMethod.DELETE,entity,Void.class);
//
//        //THEN
//        assertTrue(db.findById("2").isEmpty());
//    }
//
//    @Test
//    public void getBoosterById(){
//        //GIVEN
//        String token = loginUser();
//        db.save(new Booster("1", JOY, "2", "2", "1Booster", "hello123", "", ""));
//        db.save(new Booster("2", JOY, "2", "2", "3Booster", "hello999", "", "test"));
//
//        //WHEN
//        String url = "http://localhost:" + port + "/api/booster/2";
//        HttpHeaders headers = new HttpHeaders();
//        headers.setBearerAuth(token);
//        HttpEntity entity = new HttpEntity(headers);
//        ResponseEntity<Booster> response = restTemplate.exchange(url, HttpMethod.GET, entity, Booster.class);
//
//        //THEN
//        assertEquals(response.getStatusCode(), HttpStatus.OK);
//        assertEquals(response.getBody(), new Booster("2", JOY, "2", "2", "3Booster", "hello999", "", "test"));
//    }
//
//    @Test
//    public void getBoosterByCreator(){
//        //GIVEN
//        when(idUtils.generateRandomId()).thenReturn("random-id");
//        String token = loginUser();
//        db.save(new Booster("random-id", JOY, "1", "2", "1Booster", "hello123", "", ""));
//        db.save(new Booster("random-id", JOY, "2", "2", "3Booster", "hello999", "", "test"));
//
//
//        //WHEN
//        String url = "http://localhost:" + port + "/api/booster?creator=2";
//        HttpHeaders headers = new HttpHeaders();
//        headers.setBearerAuth(token);
//        HttpEntity entity = new HttpEntity(headers);
//        ResponseEntity <Booster> response = restTemplate.exchange(url, HttpMethod.GET, entity,Booster.class);
//
//        //THEN
//        assertEquals(response.getStatusCode(), HttpStatus.OK);
//        assertEquals(response.getBody(), new Booster("random-id", JOY, "2", "2", "3Booster", "hello999", "", "test"));
//    }
//}