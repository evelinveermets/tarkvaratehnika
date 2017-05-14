package ttu.tteh.requests;

import lombok.Getter;
import lombok.Setter;
import ttu.tteh.answer.Answer;
import ttu.tteh.trainer.Trainer;
import ttu.tteh.user.User;

import java.util.HashMap;
import java.util.List;


@Getter
@Setter
public class CreatePurchaseRequest {
    @Getter
    @Setter
    public static class ShortAnswer {
      long questionId;
      String answer;
    }

    List<ShortAnswer> answers;
    long trainerId;
    long productId;

    String email;
    String password;
}
