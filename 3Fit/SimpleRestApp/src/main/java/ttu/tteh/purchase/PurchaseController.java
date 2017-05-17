package ttu.tteh.purchase;

import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import lombok.Getter;
import lombok.Setter;
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
    private UserService userService;
    private ProductService productService;
    private TrainerService trainerService;
    private QuestionService questionService;
    private AnswerService answerService;

  public PurchaseController(PurchaseService purchaseService, UserService userService, ProductService productService, TrainerService trainerService, QuestionService questionService, AnswerService answerService) {
    this.purchaseService = purchaseService;
    this.userService = userService;
    this.productService = productService;
    this.trainerService = trainerService;
    this.questionService = questionService;
    this.answerService = answerService;
  }


    @RequestMapping(value="/user/purchases", method=RequestMethod.POST, consumes="application/json")
    public List<Purchase> getPurchases(@RequestBody User request){
      Optional<User> foundUser = userService.login(request.getEmail(), request.getPassword());
      if(!foundUser.isPresent()){
        throw new RuntimeException("You are not logged in!");
      }
      return purchaseService.getAllPurchases()
        .parallelStream()
        .filter(p -> p.owner.equals(foundUser.get()))
        .collect(Collectors.toList());
    }

    @RequestMapping(value="/trainer/purchases", method=RequestMethod.POST, consumes="application/json")
    public List<Purchase> getPurchases(@RequestBody Trainer request){
      Optional<Trainer> foundTrainer = trainerService.login(request.getEmail(), request.getPassword());
      if(!foundTrainer.isPresent()){
        throw new RuntimeException("You are not logged in!");
      }
      return purchaseService.getAllPurchases()
        .parallelStream()
        .filter(p -> p.trainer != null)
        .filter(p -> p.trainer.equals(foundTrainer.get()))
        .collect(Collectors.toList());
    }


    @RequestMapping(value="/purchases/create", method=RequestMethod.POST, consumes="application/json")
    public Purchase createPurchase(@RequestBody CreatePurchaseRequest request){
      Optional<User> foundUser = userService.login(request.getEmail(), request.getPassword());
      if(!foundUser.isPresent()){
        throw new RuntimeException("You are not logged in!");
      }

      Product foundProduct = productService.findProductById(request.getProductId());
      Trainer trainer = trainerService.getTrainerById(request.getTrainerId());

      Purchase purchase = new Purchase();
      purchase.setOwner(foundUser.get());
      purchase.setTrainer(trainer);
      purchase.setProduct(foundProduct);
      purchaseService.save(purchase);

      for (CreatePurchaseRequest.ShortAnswer q : request.getAnswers()) {
        Question question = questionService.getQuestionById(q.getQuestionId());
        Answer answer = new Answer();
        answer.setPurchase(purchase);
        answer.setAnswer(q.getAnswer());
        answer.setQuestion(question);
        purchase.getAnswers().add(answer);
        answerService.save(answer);
      }
      return purchase;
    }

  @RequestMapping(value="/purchases/{id}", method=RequestMethod.POST, consumes="application/json")
  public Purchase.PublicPurchase getPurchaseById(@RequestBody Trainer request, @PathVariable(name="id") long id){
    Optional<Trainer> trainer = trainerService.login(request.getEmail(), request.getPassword());
    if (!trainer.isPresent()) {
      throw new RuntimeException("You are not logged in as a trainer!");
    }
    return purchaseService.getPurchaseById(id).asPublicPurchase();
  }
  @RequestMapping(value="/purchases/{id}/setpaid", method=RequestMethod.POST, consumes="application/json")
  public Purchase.PublicPurchase setPaid(@RequestBody Trainer request, @PathVariable(name="id") long id){
    Optional<Trainer> trainer = trainerService.login(request.getEmail(), request.getPassword());
    if (!trainer.isPresent()) {
      throw new RuntimeException("You are not logged in as a trainer!");
    }
    Purchase purchase = purchaseService.getPurchaseById(id);
    purchaseService.setPaid(purchase);
    return purchase.asPublicPurchase();
  }

  @Getter @Setter
  static class FulfillPurchaseRequest {
    String email; String password; String answer;
  }


  @RequestMapping(value="/purchases/{id}/fulfill", method=RequestMethod.POST, consumes="application/json")
  public Purchase.PublicPurchase fulfill(@RequestBody FulfillPurchaseRequest request, @PathVariable(name="id") long id){
    Optional<Trainer> trainer = trainerService.login(request.getEmail(), request.getPassword());
    if (!trainer.isPresent()) {
      throw new RuntimeException("You are not logged in as a trainer!");
    }
    Purchase purchase = purchaseService.getPurchaseById(id);
    purchaseService.setResponse(purchase, request.getAnswer());
    return purchase.asPublicPurchase();
  }
}
