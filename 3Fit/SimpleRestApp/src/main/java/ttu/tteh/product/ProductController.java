package ttu.tteh.product;

import lombok.Getter;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


import ttu.tteh.answer.Answer;
import ttu.tteh.user.User;
import ttu.tteh.user.UserService;

/**
 * Created by Ly on 5/2/17.
 */
@RestController
public class ProductController {

  private ProductService productService;
  private UserService userService;

  public ProductController(ProductService productService, UserService userService) {
    this.productService = productService;
    this.userService = userService;
  }

  @RequestMapping(value="/products", method = RequestMethod.POST, consumes = "application/json")
  public List<Product> getProducts(@RequestBody User user) throws Exception {
    Optional<User> foundUser = userService.login(user.getEmail(), user.getPassword());
    if(!foundUser.isPresent()) {
      throw new RuntimeException("You are not logged on");
    }
    return productService.getProducts();
  }


  @RequestMapping(value="/products/{id}", method=RequestMethod.POST, consumes="application/json")
  public Product getProductById(@PathVariable(name="id") long id, @RequestBody User request){
    Optional<User> foundUser = userService.login(request.getEmail(), request.getPassword());
    if(!foundUser.isPresent()){
      throw new RuntimeException("You are not logged on");
    }
    return productService.findProductById(id);
  }


}
