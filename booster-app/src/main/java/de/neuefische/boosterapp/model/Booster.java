package de.neuefische.boosterapp.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Booster {

    @Id
    private String id;
    private BoosterType type;
    private String creator;
    private String creatorName;
    private String ownerUsername;
    private String name;
    private String message;
    private String youtubeLink;
    private String image;
}
