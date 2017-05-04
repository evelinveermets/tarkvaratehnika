package ttu.tteh.answer;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
import ttu.tteh.purchase.Purchase;
import ttu.tteh.question.Question;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@Getter
@Setter
public class Answer {
    @Id
    @GeneratedValue
    long id;
    @ManyToOne
    Question question;
    String answer;
    @JsonIgnore
    @ManyToOne
    Purchase purchase;
}
