package ttu.tteh.question;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import ttu.tteh.product.Product;

/**
 * Created by Ly on 5/2/17.
 */
@Service
public class QuestionService {
  QuestionRepository questionRepository;

  public QuestionService(QuestionRepository questionRepository) {
    this.questionRepository = questionRepository;
  }

  public void addQuestionToProduct(String question, Product product){
    Question newQuestion = new Question();
    newQuestion.setProduct(product);
    newQuestion.setQuestion(question);
  }

  public List<Question> getQuestionsForProduct(long product){
    List<Question> productQuestions = questionRepository.findAll()
      .parallelStream()
      .filter(q -> q.getProduct() != null)
      .filter(q -> q.getProduct().getId() == product)
      .collect(Collectors.toList());
    return productQuestions;
  }

  public Question getQuestionById(long questionID) {
    return questionRepository.findOne(questionID);
  }
}
