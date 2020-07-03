package de.neuefische.boosterapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Booster {

    private String id;
    private BoosterType type;
    private String message;
    private String youtubeLink;
    private String spotifyLink;
}
