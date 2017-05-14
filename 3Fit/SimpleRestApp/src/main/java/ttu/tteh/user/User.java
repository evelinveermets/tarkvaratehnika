package ttu.tteh.user;

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
public class User {
  @Id
  @GeneratedValue
  long id;
  @Column(unique = true)
  String email;
  String password;
  String firstname;
  String lastname;
  String gender;
  Date birthday;


  @JsonIgnore
  @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL)
  List<Purchase> purchases;

  @Getter
  @Setter
  public class PublicUser {
    long id;
    String firstname;
    String lastname;
    String gender;
  }

  public PublicUser asPublicuser(){
    PublicUser pu = new PublicUser();
    pu.setId(this.getId());
    pu.setFirstname(this.getFirstname());
    pu.setLastname(this.getLastname());
    pu.setGender(this.getGender());
    return pu;
  }
}

