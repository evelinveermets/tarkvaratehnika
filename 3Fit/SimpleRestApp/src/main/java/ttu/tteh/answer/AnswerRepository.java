package ttu.tteh.answer;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AnswerRepository extends CrudRepository<Answer, Long> {
  @Override
  public List<Answer> findAll();
}
