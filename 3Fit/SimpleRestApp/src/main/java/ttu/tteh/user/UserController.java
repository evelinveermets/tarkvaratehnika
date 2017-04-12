package ttu.tteh.user;

import org.springframework.web.bind.annotation.*;
import ttu.tteh.requests.LoginRequest;
import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
	
	private UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@RequestMapping(value="/users/add", method=RequestMethod.POST, consumes = "application/json")
	public User addUser(@RequestBody User user) {
		if(userService.getUserById(user.getId()) != null){
			throw new IllegalArgumentException("You are not allowed to specify the ID of the user you are creating!");
		}
		// TODO: Other checks
		return userService.addUser(user);
	}

	@RequestMapping(value="/login", method=RequestMethod.POST, consumes = "application/json")
	public User login(@RequestBody LoginRequest request){
		Optional<User> foundUser = userService.getAllUsers().stream()
        .filter(u -> u.getEmail() != null) // Sanity checks to avoid NPE - ignore users with NULL fields
        .filter(u -> u.getPassword() != null)
				.filter(u -> u.getEmail().equals(request.getEmail()))
				.findFirst();
		if(!foundUser.isPresent()){
			// Note: Should we be more specific for the user?
			throw new RuntimeException("Incorrect email or password");
		} else if(!foundUser.get().getPassword().equals(request.getPassword())) {
      throw new RuntimeException("Incorrect email or password");
    } else {
      return foundUser.get();
    }
	}

	
	@RequestMapping(value="/users", method=RequestMethod.GET)
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@RequestMapping(value = "/users/{id}", method=RequestMethod.GET)
	public User getUser(@PathVariable("id") long userId) {
		return userService.getUserById(userId);
	}
}