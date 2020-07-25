package de.neuefische.boosterapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Size;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "boosterUser")
public class BoosterUser {

    @Size(min = 5, message = "username min length 5")
    private String id;
    @Id
    private String username;
    @Size(min = 5, message = "password min length 5")
    private String password;
    private String firstName;
    private String email;
    private String role;
    private int createdBooster;
    private List<String> friends;

}

