package ttu.tteh.purchase;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;

import ttu.tteh.answer.Answer;
import ttu.tteh.answer.AnswerService;
import ttu.tteh.product.Product;
import ttu.tteh.product.ProductService;
import ttu.tteh.question.Question;
import ttu.tteh.question.QuestionService;
import ttu.tteh.requests.CreatePurchaseRequest;
import ttu.tteh.trainer.Trainer;
import ttu.tteh.trainer.TrainerService;
import ttu.tteh.user.User;
import ttu.tteh.user.UserService;

/**
 * Created by Ly Tempel on 09.04.2017.
 */
@RestController
public class PurchaseController {

  private PurchaseService purchaseService;
  private  UserService userService;
  private final ProductService productService;
  private TrainerService trainerService;
  private final QuestionService questionService;
  private AnswerService answerService;

  public PurchaseController(PurchaseService purchaseService, UserService userService, ProductService productService, TrainerService trainerService, QuestionService questionService, AnswerService answerService) {
    this.purchaseService = purchaseService;
    this.userService = userService;
    this.productService = productService;
    this.trainerService = trainerService;
    this.questionService = questionService;
    this.answerService = answerService;
  }


    @RequestMapping(value="/purchases", method=RequestMethod.POST, consumes="application/json")
    public Purchase createPurchase(@RequestBody CreatePurchaseRequest request){
      Optional<User> foundUser = userService.login(request.getEmail(), request.getPassword());
      if(!foundUser.isPresent()){
        throw new RuntimeException("You are not logged in!");
      }

      Product foundProduct = productService.findProductById(request.getProductID());
      Trainer trainer = trainerService.getTrainerById(request.getTrainerID());

      Purchase purchase = new Purchase();
      purchase.setOwner(foundUser.get());
      purchase.setTrainer(trainer);
      purchase.setProduct(foundProduct);
      purchaseService.save(purchase);

      for ( Integer questionID : request.getAnswers().keySet()) {
        Question question = questionService.getQuestionById(questionID);
        Answer answer = new Answer();
        answer.setPurchase(purchase);
        answer.setAnswer(request.getAnswers().get(questionID));
        answer.setQuestion(question);
        purchase.getAnswers().add(answer);
        answerService.save(answer);
      }
      return purchase;
    }
}
