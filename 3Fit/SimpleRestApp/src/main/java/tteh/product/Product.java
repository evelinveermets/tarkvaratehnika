package tteh.product;

import lombok.Getter;
import lombok.Setter;
import ttu.tteh.purchase.Purchase;
import ttu.tteh.question.Question;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue
    long id;
    String title;
    int cost;
    @OneToMany(mappedBy="product", cascade= CascadeType.ALL)
    List<Purchase> purchases;
    @OneToMany(mappedBy="product", cascade= CascadeType.ALL)
    List<Question> questions;
}
