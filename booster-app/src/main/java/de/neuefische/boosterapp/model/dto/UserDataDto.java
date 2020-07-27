package de.neuefische.boosterapp.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public class UserDataDto {

        private int createdBooster;
        private int numberOfFriends;
    }

