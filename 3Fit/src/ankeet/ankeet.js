import {HttpClient, json} from 'aurelia-fetch-client'
import { LoginService } from '../LoginService'

export class Ankeet {

     questions = [];
     trainers = [];
     selectedTrainer;
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
          console.log("product", data);
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
              console.log("questions", this.questions)
          });
    }
    submitQuestions(event){
      console.log(this.form);
      let data = [];
      for (let q of this.questions) {
        data.push({
          questionId: parseInt(q.id),
          answer: this.form[q.id]
        });
      }
      let client = new HttpClient();
      let user = LoginService.getCredentials();

      console.log(this);
      let createPurchaseRequest = {
        answers: data,
        email: user.email,
        password: user.password,
        trainerId: parseInt(this.selectedTrainer),
        productId: parseInt(this.productId)
      };
      console.log(createPurchaseRequest);

      console.log(createPurchaseRequest);
      client.fetch('http://localhost:8080/purchases/create',{
        'method': "POST",
        'body': json(createPurchaseRequest)
      })
        .then(response => response.json())
        .then(response => console.log(response))
        .then(success => window.location.reload(true))
        .catch(error => console.error("Failed to submit purchase", error))
        alert("Tellimus esitatud!");
    }

  loadTrainers() {
    let client = new HttpClient();
    let user = LoginService.getCredentials();

    client.fetch('http://localhost:8080/trainers',{
      'method': "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.trainers = data;
        console.log("trainers",data);
      })
      .catch(error => console.error("Failed to load trainers' list", error))
  }
}
