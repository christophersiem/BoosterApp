package de.neuefische.boosterapp.db;


import de.neuefische.boosterapp.model.BoosterUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserDb extends PagingAndSortingRepository<BoosterUser,String> {
     BoosterUser findByUsername(String username);

    }


