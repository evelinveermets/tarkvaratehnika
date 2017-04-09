package ttu.tteh.trainer;

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
    Date birthday;
    @OneToMany(mappedBy="trainer", cascade=CascadeType.ALL)
    List<Purchase> purchases;
}
