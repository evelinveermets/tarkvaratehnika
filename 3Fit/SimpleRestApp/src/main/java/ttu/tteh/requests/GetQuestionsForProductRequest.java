package ttu.tteh.requests;

import lombok.Getter;
import lombok.Setter;


/**
 * Created by Ly on 5/2/17.
 */
@Setter
@Getter
public class GetQuestionsForProductRequest {
  String email;
  String password;
  long productID;
}

