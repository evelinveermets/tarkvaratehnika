package ttu.tteh.product;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
    @JsonIgnore
    @OneToMany(mappedBy="product", cascade= CascadeType.ALL)
    List<Purchase> purchases;
    @JsonIgnore
    @OneToMany(mappedBy="product", cascade= CascadeType.ALL)
    List<Question> questions;
}
