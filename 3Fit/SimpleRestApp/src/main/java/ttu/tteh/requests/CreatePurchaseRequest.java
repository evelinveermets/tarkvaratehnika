package ttu.tteh.requests;

import lombok.Getter;
import lombok.Setter;
import ttu.tteh.answer.Answer;
import ttu.tteh.trainer.Trainer;
import ttu.tteh.user.User;

import java.util.List;


@Getter
@Setter
public class CreatePurchaseRequest {
    List<Answer> answers;
    // TODO: How do sessions/authentication work
    User owner;
    Trainer trainer;
}
