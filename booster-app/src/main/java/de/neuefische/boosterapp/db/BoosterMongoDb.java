package de.neuefische.boosterapp.db;

import de.neuefische.boosterapp.model.Booster;
import de.neuefische.boosterapp.model.BoosterType;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;


public interface BoosterMongoDb extends PagingAndSortingRepository<Booster,String>{
    List<Booster> findByCreator(String creator);
    List<Booster> findByOwnerAndType(String owner, BoosterType type);

}

