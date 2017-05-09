package ttu.tteh.trainer;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
import ttu.tteh.purchase.Purchase;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Getter
@Setter
public class Trainer {
  @Id
    @GeneratedValue
    long id;
  @Column(unique=true)
    String email;
    String password;
    String firstname;
    String lastname;
    String gender;
    String imageUrl;
    // TODO: Description
    Date birthday;

    @JsonIgnore
    @OneToMany(mappedBy="trainer", cascade=CascadeType.ALL)
    List<Purchase> purchases;
  @Getter
    @Setter
    public class PublicTrainer {
      String firstname;
      String lastname;
      String gender;
      String imageUrl;
      long id;
      // TODO: Description
    }

    PublicTrainer asPublicTrainer(){
      PublicTrainer p = new PublicTrainer();
      p.setFirstname(this.getFirstname());
      p.setLastname(this.getLastname());
      p.setGender(this.getGender());
      p.setId(this.getId());
      return p;
    }
}
