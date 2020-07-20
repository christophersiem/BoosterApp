//package de.neuefische.boosterapp.controller;
//
//import de.neuefische.boosterapp.db.UserDb;
//import de.neuefische.boosterapp.model.BoosterUser;
//import de.neuefische.boosterapp.model.LoginData;
//import de.neuefische.boosterapp.utils.IdUtils;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.boot.web.server.LocalServerPort;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.*;
//import static org.mockito.Mockito.when;
//
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//class UserControllerTest {
//    @LocalServerPort
//    public int port;
//
//    @Autowired
//    public TestRestTemplate restTemplate;
//
//    @MockBean
//    private IdUtils idUtils;
//
//    @Autowired
//    public UserDb userDb;
//
//    @Autowired
//    public PasswordEncoder encoder;
//
//    @BeforeEach
//    public void resetDb(){
//        userDb.deleteAll();
//    }
//
//    @Test
//    public void addUserShouldAddUserToDb(){
//        //GIVEN
//        when(idUtils.generateRandomId()).thenReturn("123");
//        BoosterUser registerUser = new BoosterUser("","chris2020",encoder.encode("!!21*QqwW"),1,"Markus","test@test.de","user");
//        userDb.save(registerUser);
//
//        //WHEN
//        String url = "http://localhost:"+ port + "/auth/register";
//        ResponseEntity<String> postResponse = restTemplate.postForEntity(url, new BoosterUser("","chris2020",encoder.encode("!!21*QqwW"),1,"Markus","test@test.de",""),String.class);
//
//        //THEN
//
//        Optional<BoosterUser> user = userDb.findById("123");
//        assertTrue(user.isPresent());
//
//
//    }
//}