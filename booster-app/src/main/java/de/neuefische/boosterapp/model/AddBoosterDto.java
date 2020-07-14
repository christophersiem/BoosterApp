package de.neuefische.boosterapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddBoosterDto {

        private BoosterType type;
        private String creator;
        private String owner;
        @Size(min = 5, max = 20, message = "minimum length = 5")
        private String name;
        private String message;
        private String youtubeLink;
        private String spotifyLink;

    }


