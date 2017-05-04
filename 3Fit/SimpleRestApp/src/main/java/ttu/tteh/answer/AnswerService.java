package ttu.tteh.answer;

import org.springframework.stereotype.Service;

import java.util.List;

import ttu.tteh.product.Product;

/**
 * Created by Ly on 5/2/17.
 */
@Service
public class AnswerService {
  AnswerRepository answerRepository;

  public AnswerService(AnswerRepository answerRepository) {
    this.answerRepository = answerRepository;
  }

  public List<Answer> getAnswers(){
    return this.answerRepository.findAll();
  }


  public void save(Answer answer) {
    answerRepository.save(answer);
  }
}
