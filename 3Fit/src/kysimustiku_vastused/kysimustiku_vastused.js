import {inject} from 'aurelia-framework';
import {TrainerLoginService} from '../TrainerLoginService';
import {Router} from 'aurelia-router';
import {HttpClient, json} from 'aurelia-fetch-client'

@inject(Router)
export class Kysimustiku_vastused {
  router;
  purchases = [];
  constructor(router : Router) {
    this.router = router;
  }

  activate(){
    console.log("LOADED");
    this.loadPurchases();
  }

  logout(){
    LoginService.logout();
    alert("Olete edukalt välja logitud");
    this.router.navigateToRoute('home');
  }

  loadPurchases() {
    let client = new HttpClient();
    let trainer = TrainerLoginService.getCredentials();
    client.fetch("http://localhost:8080/trainer/purchases", {
      method: "POST",
      body: json({email: trainer.email, password: trainer.password})
    })
      .then(data => data.json())
      .then(p => {
        console.log(p);
        return this.purchases = p;
      })
      .catch(e => console.error(e));
  }

  loadQuestions(){
    let client = new HttpClient();
    let trainer = TrainerLoginService.getCredentials();

    client.fetch('http://localhost:8080/questions',{
      'method': "POST",
      'body': json({email: user.email, password: user.password, productId: this.productId})
    })
      .then(response => response.json())
      .then(data => {
        this.questions = data;
        console.log("questions", this.questions)
      });
  }
}
