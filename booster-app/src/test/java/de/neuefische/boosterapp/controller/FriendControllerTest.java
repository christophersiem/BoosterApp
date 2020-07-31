//package de.neuefische.boosterapp.controller;
//
//import de.neuefische.boosterapp.db.BoosterMongoDb;
//import de.neuefische.boosterapp.db.UserDb;
//import de.neuefische.boosterapp.model.Booster;
//import de.neuefische.boosterapp.model.BoosterUser;
//import de.neuefische.boosterapp.model.LoginData;
//import de.neuefische.boosterapp.model.dto.FriendListDto;
//import de.neuefische.boosterapp.utils.UserUtils;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.boot.web.server.LocalServerPort;
//import org.springframework.http.*;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//import java.util.Arrays;
//import java.util.Optional;
//
//import static de.neuefische.boosterapp.model.BoosterType.JOY;
//import static org.junit.jupiter.api.Assertions.*;
//import static org.mockito.Mockito.when;
//
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//class FriendControllerTest {
//
//    @LocalServerPort
//    public int port;
//
//    @MockBean
//    private UserUtils userUtils;
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
//    private BoosterMongoDb boosterMongoDb;
//
//    @BeforeEach
//    public void resetDatabase() {
//        boosterMongoDb.deleteAll();
//    }
//
//    private String loginUser() {
//
//        BoosterUser user = new BoosterUser("1", "chris2020", encoder.encode("!!21*QqwW"), "hannes", "test@test.de", "user", 0, Arrays.asList("123", "234"));
//        userDb.save(user);
//
//        String loginUrl = "http://localhost:" + port + "/auth/login";
//        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(loginUrl, new LoginData("chris2020", "!!21*QqwW"), String.class);
//        return tokenResponse.getBody();
//    }
//
//    @Test
//    public void addNewFriendShouldAddNewFriend() {
//        //GIVEN
//        String token = loginUser();
//        when(userUtils.generateRandomId()).thenReturn("random-id");
//        String friend = "max11";
//        String url = "http://localhost:" + port + "/api/friends";
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setBearerAuth(token);
//        HttpEntity<friend> requestEntity = new HttpEntity<>(friendListDto, headers);
//
//        //WHEN
//        ResponseEntity<BoosterUser> postResponse = restTemplate.exchange(url, HttpMethod.POST, requestEntity, BoosterUser.class);
//
//        //THEN
//        assertEquals(postResponse.getStatusCode(), HttpStatus.OK);
//    }
//
//}