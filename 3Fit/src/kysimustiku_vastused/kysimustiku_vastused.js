import {inject} from 'aurelia-framework';
import {TrainerLoginService} from '../TrainerLoginService';
import {Router} from 'aurelia-router';
import {HttpClient, json} from 'aurelia-fetch-client'
import {PurchaseService} from '../PurchaseService';

@inject(Router)
export class Kysimustiku_vastused {
  router;
  purchase;
  purchaseId;
  constructor(router : Router) {
    this.router = router;
  }

  activate(params){
    console.log(params);
    this.purchaseId = params.id;
    console.log("LOADED");
    this.loadAnswers();
    //this.loadQuestions();
    //this.loadAnswers();
  }


  loadAnswers(){
    let client = new HttpClient();
    let trainer = TrainerLoginService.getCredentials();

    client.fetch('http://localhost:8080/purchases/'+this.purchaseId,{
      'method': "POST",
      'body': json({email: trainer.email, password: trainer.password})
    })
      .then(response => response.json())
      .then(data => {
        this.purchase = data;
        console.log("questions", this.purchase)
      });
  }

  submit(purchase, item){
    let trainer = TrainerLoginService.getCredentials();
    PurchaseService.submitPurchase(trainer.email, trainer.password, this.purchase.id, item)
      .then(response => {
        this.purchases = this.purchases.filter(p => p !== purchase);
        this.purchases.push(response);
        return response;
      })
      .then(response => console.log("Purchase responded to", response))
      .then(response => this.loadPurchases())
      .catch(console.error);
    alert("Kava kliendile edastatud")
  }
}
