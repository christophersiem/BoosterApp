//package de.neuefische.boosterapp.controller;
//
//import de.neuefische.boosterapp.model.Booster;
//import de.neuefische.boosterapp.utils.IdUtils;
//import org.junit.jupiter.api.Test;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.boot.web.server.LocalServerPort;
//
//import static org.junit.jupiter.api.Assertions.*;
//import static org.mockito.Mockito.when;
//
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//class BoosterControllerTest {
//    @LocalServerPort
//    public int port;
//    @MockBean
//    private IdUtils idUtils;
//    @Test
//    public void addNewBoosterShouldAddBooster(){
//        //GIVEN
//        when(idUtils.generateRandomId()).thenReturn("random-id");
//        Booster booster = new Booster("random-id");
//        String url = "http://localhost:" + port + "/api/booster";
//
//
//    }
//
//
//}