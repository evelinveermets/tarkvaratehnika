package ttu.tteh.question;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

/**
 * Created by Ly on 5/2/17.
 */
public interface QuestionRepository extends CrudRepository<Question, Long> {
  @Override
  public List<Question> findAll();
}
