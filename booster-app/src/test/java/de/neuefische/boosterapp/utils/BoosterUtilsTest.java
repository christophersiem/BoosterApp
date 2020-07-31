package de.neuefische.boosterapp.utils;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class BoosterUtilsTest {

    @Autowired
    public BoosterUtils boosterUtils;

    @Test
    public void getYoutubeIdShouldReturnIdFromLink() {

        //GIVEN
        String url = "https://www.youtube.com/watch?v=YO1GBsuzTWU";

        // WHEN
        String response = BoosterUtils.getYoutubeId(url);

        //THEN
        assertEquals("YO1GBsuzTWU",response);

    }
}