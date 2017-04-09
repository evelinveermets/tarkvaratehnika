package ttu.tteh.question;


import lombok.Getter;
import lombok.Setter;
import ttu.tteh.product.Product;

import javax.persistence.Entity;
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
    @ManyToOne
    Product product;
}
