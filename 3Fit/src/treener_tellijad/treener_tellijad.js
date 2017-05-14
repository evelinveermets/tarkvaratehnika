import {inject} from 'aurelia-framework';
import {TrainerLoginService} from '../TrainerLoginService';
import {Router} from 'aurelia-router';
import {HttpClient, json} from 'aurelia-fetch-client'


@inject(Router)
export class Treener_tellijad {
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
    TrainerLoginService.logout();
    alert("Logged out");
    this.router.navigateToRoute('treener_sisselogimine');
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
    
}
