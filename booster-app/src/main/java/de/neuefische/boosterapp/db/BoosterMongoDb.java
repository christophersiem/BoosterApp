package de.neuefische.boosterapp.db;

import de.neuefische.boosterapp.model.Booster;
import org.springframework.data.repository.PagingAndSortingRepository;


public interface BoosterMongoDb extends PagingAndSortingRepository<Booster,String>{

    }

