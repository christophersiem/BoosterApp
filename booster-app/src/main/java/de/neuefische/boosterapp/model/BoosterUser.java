package de.neuefische.boosterapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "boosterUser")
public class BoosterUser {

    @Size(min = 5, message = "username min length 5")
    @Id
    private String id;
    private String username;
    @Size(min = 5, message = "password min length 5")
    private String password;
    private String firstName;
    private String email;
    private String role;
}

