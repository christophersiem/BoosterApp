package de.neuefische.boosterapp.db;


import de.neuefische.boosterapp.model.BoosterUser;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserDb extends PagingAndSortingRepository<BoosterUser,String> {
    BoosterUser findByUsername(String username);
    List <String> findFriendsByUsername(String userId);

    }


