package ttu.tteh.purchase;

import com.fasterxml.jackson.annotation.JsonFilter;

import lombok.Getter;
import lombok.Setter;
import ttu.tteh.answer.Answer;
import ttu.tteh.product.Product;
import ttu.tteh.trainer.Trainer;
import ttu.tteh.user.User;

import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Purchase {
    @Id
    @GeneratedValue
    long id;
    @ManyToOne
    public Product product;

    // TODO: Important: Serialize user as only email
    @ManyToOne
    public User owner;
    @ManyToOne
    public Trainer trainer;
    public Date submitted_on = new Date(new java.util.Date().getTime());
    public Date paid_on;
    @OneToMany(mappedBy="purchase", cascade=CascadeType.ALL)
    public List<Answer> answers = new ArrayList<>();
}
