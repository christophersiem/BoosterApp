//package de.neuefische.boosterapp.controller;
//
//import de.neuefische.boosterapp.db.UserDb;
//import de.neuefische.boosterapp.model.BoosterUser;
//import de.neuefische.boosterapp.model.LoginData;
//import de.neuefische.boosterapp.security.JWTUtils;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.boot.web.server.LocalServerPort;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import static org.junit.jupiter.api.Assertions.*;
//
//
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//class LoginControllerTest {
//
//    @LocalServerPort
//    public int port;
//
//    @Autowired
//    public TestRestTemplate restTemplate;
//
//    @Autowired
//    public PasswordEncoder encoder;
//
//    @Autowired
//    public UserDb userDb;
//
//    @Autowired
//    public JWTUtils jwtUtils;
//
//    @BeforeEach
//    public void resetDb(){
//        userDb.deleteAll();
//    }
//
//    @Test
//    public void loginWithValidCredentials(){
//
//        //GIVEN
//        BoosterUser testUser = new BoosterUser("1","chris2020",encoder.encode("!!21*QqwW"),1,"Markus","test@test.de","user");
//        userDb.save(testUser);
//
//        //WHEN
//        String url = "http://localhost:"+ port + "/auth/login";
//        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(url, new LoginData("chris2020","!!21*QqwW"), String.class);
//
//        //THEN
//        assertEquals(HttpStatus.OK, tokenResponse.getStatusCode());
//        assertTrue(jwtUtils.validateToken(tokenResponse.getBody(),"chris2020"));
//
//    }
//
//    @Test
//    public void loginWithInvalidCredentials(){
//
//        //GIVEN
//        BoosterUser testUser = new BoosterUser("1","chris2020",encoder.encode("!!21*QqwW"),1,"Markus","test@test.de","user");
//        userDb.save(testUser);
//
//        //WHEN
//        String url = "http://localhost:"+ port + "/auth/login";
//        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(url, new LoginData("chris2020","??21*QqwW"), String.class);
//
//        //THEN
//        assertEquals(HttpStatus.BAD_REQUEST, tokenResponse.getStatusCode());
//    }
//}