package ttu.tteh.trainer;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainerRepository extends CrudRepository<Trainer, Long>{
	@Override
	public List<Trainer> findAll();
}
