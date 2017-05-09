package ttu.tteh.question;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import ttu.tteh.requests.GetQuestionsForProductRequest;
import ttu.tteh.user.User;
import ttu.tteh.user.UserService;

/**
 * Created by Ly on 5/2/17.
 */
@RestController
public class QuestionController {

  private QuestionService questionService;
  private UserService userService;

  public QuestionController(QuestionService questionService, UserService userService) {
    this.questionService = questionService;
    this.userService = userService;
  }

  @RequestMapping(value="/questions", method = RequestMethod.POST, consumes = "application/json")
  public List<Question> getQuestionsForProduct(@RequestBody GetQuestionsForProductRequest request) throws Exception {
    Optional<User> user = userService.login(request.getEmail(), request.getPassword());
    if(!user.isPresent()) {
      throw new RuntimeException("You are not logged on");
    }
    return questionService.getQuestionsForProduct(request.getProductId());
  }


}
