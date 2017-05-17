package ttu.tteh.trainer;

import org.springframework.web.bind.annotation.*;
import ttu.tteh.requests.LoginRequest2;
import ttu.tteh.user.UserService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class TrainerController {
	
	private TrainerService trainerService;
  private UserService userService;



	public TrainerController(TrainerService trainerService, UserService userService) {
	  this.trainerService = trainerService;
    this.userService = userService;
	}
	

	@RequestMapping(value="/login2", method=RequestMethod.POST, consumes = "application/json")
	public Trainer login(@RequestBody LoginRequest2 request){
    Optional<Trainer> foundTrainer = trainerService.login(request.getEmail(), request.getPassword());
		if(!foundTrainer.isPresent()){
			throw new RuntimeException("Incorrect email or password");
		} else if(!foundTrainer.get().getPassword().equals(request.getPassword())) {
      throw new RuntimeException("Incorrect email or password");
    } else {
      return foundTrainer.get();
    }
	}

	
	@RequestMapping(value="/trainers", method=RequestMethod.GET)
	public List<Trainer.PublicTrainer> getAllTrainers() {
	  return trainerService.getAllTrainers()
      .parallelStream()
      .map(t -> t.asPublicTrainer())
      .collect(Collectors.toList());
	}
	
	@RequestMapping(value = "/trainers/{id}", method=RequestMethod.GET)
	public Trainer.PublicTrainer getTrainer(@PathVariable("id") long trainerId) {
		return trainerService.getTrainerById(trainerId).asPublicTrainer();
	}
}
