package de.neuefische.boosterapp.model.dto;

import de.neuefische.boosterapp.model.BoosterType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddBoosterDto {

    private BoosterType type;
    private String creator;
    private String creatorUsername;
    private String creatorName;
    private String owner;
    private String name;
    private String message;
    private String youtubeLink;
    private String image;

}


