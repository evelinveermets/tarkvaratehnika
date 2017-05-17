import {HttpClient, json} from 'aurelia-fetch-client';

export class PurchaseService {

  static client = new HttpClient();

  static getPurchasesToTrainer(email, password){
    return this.client.fetch('http://localhost:8080/trainer/purchases',{
      'method': "POST",
      'body': json({email: email, password: password})
    })
      .then(response => response.json())
  }
  static markAsPaid(email, password, purchaseId){
    return this.client.fetch('http://localhost:8080/purchases/'+purchaseId+'/setpaid',{
      'method': "POST",
      'body': json({email: email, password: password})
    })
      .then(response => response.json())
      .then(response => {
      })
  }
  static submitPurchase(email, password, purchaseId, answer){
    console.log("Request body",{email: email, password: password, answer:answer});
    return this.client.fetch('http://localhost:8080/purchases/'+purchaseId+'/fulfill',{
      'method': "POST",
      'body': json({email: email, password: password, answer:answer})
    })
      .then(response => response.json())
  }

}
