package ttu.tteh.trainer;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainerService {
	
	private TrainerRepository trainerRepository;

	public TrainerService(TrainerRepository trainerRepository) {
		this.trainerRepository = trainerRepository;
	}

	Trainer addTrainer(Trainer trainer) {
		// here you can do some validations etc before saving the user
		//user.setCar(new Car());
		return trainerRepository.save(trainer);
	}

	List<Trainer> getAllTrainers() {
		return trainerRepository.findAll();
	}

	Trainer getTrainerById(long trainerId) {
		return trainerRepository.findOne(trainerId);
	}
}
