import {HttpClient, json} from 'aurelia-fetch-client'
import { LoginService } from '../LoginService'

export class Ankeet {

     questions = [];
     trainers = [];
     product = {
       id: -1,
       title: "Kava",
       cost: 0,
       description: ""
     };
     form = {};


    activate(params){
      this.productId = params.productId;
      this.loadProduct();
      this.loadTrainers();
      this.loadQuestions()
    }

    loadProduct() {
      let client = new HttpClient();
      let user = LoginService.getCredentials();
      client.fetch("http://localhost:8080/products/"+this.productId, {
        'method': "POST",
        'body': json({email: user.email, password: user.password})
      })
        .then(response => response.json())
        .then(data => {
          this.product = data;
          console.log(data);
        })
        .catch(error => console.error("Failed to load product data",e));
    }

    loadQuestions(){
        let client = new HttpClient();
        let user = LoginService.getCredentials();

        client.fetch('http://localhost:8080/questions',{
            'method': "POST",
            'body': json({email: user.email, password: user.password, productId: this.productId})
        })
          .then(response => response.json())
          .then(data => {
              this.questions = data;
            console.log(this.questions)
          });
    }
    submitQuestions(event){
      console.log(this.form);
      let data = {};
      for (let q of this.questions) {
        data[q.id] = this.form[q.id];
      }
      let client = new HttpClient();
      let user = LoginService.getCredentials();

      let createPurchaseRequest = {
        answers: data,
        email: user.email,
        password: user.password,
        trainerId: 1, //TODO: Actual selection
        productId: this.productId
      };

      console.log(createPurchaseRequest);
      client.fetch('http://localhost:8080/purchases/create',{
        'method': "POST",
        'body': json(createPurchaseRequest)
      })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.error("Failed to submit purchase", error))

    }

  loadTrainers() {
    let client = new HttpClient();
    let user = LoginService.getCredentials();

    client.fetch('http://localhost:8080/trainers',{
      'method': "GET"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.trainers = data;
      })
      .catch(error => console.error("Failed to load trainers' list", error))
  }
}
