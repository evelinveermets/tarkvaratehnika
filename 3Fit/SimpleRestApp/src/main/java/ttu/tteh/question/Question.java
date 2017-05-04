package ttu.tteh.question;


import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.ColumnDefault;

import lombok.Getter;
import lombok.Setter;
import ttu.tteh.product.Product;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@Getter
@Setter
public class Question {
    @Id
    @GeneratedValue
    long id;
    String question;
    @JsonIgnore
    @ManyToOne
    Product product;

    @Enumerated(EnumType.STRING)
    QuestionType type = QuestionType.largeText;


    enum QuestionType {
      smallText, largeText
    }
}
