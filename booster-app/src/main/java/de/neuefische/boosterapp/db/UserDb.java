package de.neuefische.boosterapp.db;


import de.neuefische.boosterapp.model.BoosterUser;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface UserDb extends PagingAndSortingRepository<BoosterUser, String> {
    Optional<BoosterUser> findByUsername(String username);

}


