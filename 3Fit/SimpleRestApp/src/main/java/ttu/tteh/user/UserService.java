package ttu.tteh.user;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
	
	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	User addUser(User user) {
		// here you can do some validations etc before saving the user
		//user.setCar(new Car());
		return userRepository.save(user);
	}

	public Optional<User> login(String email, String password){
	  if(email == null || password == null){
	    throw new NullPointerException("You must specify an email and password");
    }
    return this.getAllUsers().stream()
      .filter(u -> email.equals(u.getEmail()))
      .filter(u -> password.equals(u.getPassword()))
      .findFirst();
  }

	List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public User getUserById(long userId) {
		return userRepository.findOne(userId);
	}
}
