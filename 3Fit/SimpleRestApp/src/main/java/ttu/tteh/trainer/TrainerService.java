package ttu.tteh.trainer;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

  public Optional<Trainer> login(String email, String password){
    if(email == null || password == null){
      throw new NullPointerException("You must specify an email and password");
    }
    return this.getAllTrainers().stream()
      .filter(t -> t.getEmail() != null) // Sanity checks to avoid NPE - ignore users with NULL fields
      .filter(t -> t.getPassword() != null)
      .filter(u -> email.equals(u.getEmail()))
      .filter(u -> password.equals(u.getPassword()))
      .findFirst();
  }

	public List<Trainer> getAllTrainers() {
		return trainerRepository.findAll();
	}

	public Trainer getTrainerById(long trainerId) {
		return trainerRepository.findOne(trainerId);
	}

}
