package de.neuefische.boosterapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Booster {

    @Id
    private String id;
    private BoosterType type;
    private String creator;
    private String creatorName;
    private String owner;
    private String name;
    private String message;
    private String youtubeLink;
    private String spotifyLink;
    private String image;
}
