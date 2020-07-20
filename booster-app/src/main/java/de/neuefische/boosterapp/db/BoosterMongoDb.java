package de.neuefische.boosterapp.db;

import de.neuefische.boosterapp.model.Booster;
import org.springframework.data.repository.PagingAndSortingRepository;


import java.util.List;


public interface BoosterMongoDb extends PagingAndSortingRepository<Booster,String>{
    List<Booster> findByCreator(String username);


}


