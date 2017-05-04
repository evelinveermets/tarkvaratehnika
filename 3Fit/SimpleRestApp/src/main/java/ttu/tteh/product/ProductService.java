package ttu.tteh.product;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import ttu.tteh.answer.Answer;
import ttu.tteh.answer.AnswerRepository;
import ttu.tteh.question.Question;

/**
 * Created by Ly on 5/2/17.
 */
@Service
public class ProductService {

  private final ProductRepository productRepository;

  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  public List<Product> getProducts(){
    return this.productRepository.findAll();
  }
  public Product findProductById(long id){
    return this.productRepository.findOne(id);
  }

}
