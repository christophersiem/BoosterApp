package de.neuefische.boosterapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Size;

public class AddBoosterDto {

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public class AddIdeaDto {

        @Size(min = 5, message = "minimum length = 5")
        private String name;

    }

}
