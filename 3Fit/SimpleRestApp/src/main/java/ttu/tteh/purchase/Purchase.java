package ttu.tteh.purchase;

import com.fasterxml.jackson.annotation.JsonFilter;

import lombok.Getter;
import lombok.Setter;
import ttu.tteh.answer.Answer;
import ttu.tteh.product.Product;
import ttu.tteh.trainer.Trainer;
import ttu.tteh.user.User;

import javax.persistence.*;
import java.util.Date;
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

    @ManyToOne
    public User owner;
    @ManyToOne
    public Trainer trainer;
    @Column(columnDefinition="DATETIME")
    @Temporal(TemporalType.TIMESTAMP)
    public Date submitted_on = new Date();
    @Column(columnDefinition="DATETIME")
    @Temporal(TemporalType.TIMESTAMP)
    public Date paid_on = new Date();
    @OneToMany(mappedBy="purchase", cascade=CascadeType.ALL)
    public List<Answer> answers = new ArrayList<>();
    String purchasedItem;

    @Getter
    @Setter
    class PublicPurchase {
      long id;
      Product product;
      User.PublicUser owner;
      Trainer.PublicTrainer trainer;
      Date submitted_on;
      Date paid_on;
      List<Answer> answers;
    }

    public PublicPurchase asPublicPurchase(){
      PublicPurchase pp = new PublicPurchase();
      pp.setId(this.getId());
      pp.setAnswers(this.getAnswers());
      pp.setOwner(this.getOwner().asPublicuser());
      pp.setPaid_on(this.getPaid_on());
      pp.setSubmitted_on(this.getSubmitted_on());
      pp.setProduct(this.getProduct());
      pp.setTrainer(this.getTrainer().asPublicTrainer());
      return pp;
    }
}
