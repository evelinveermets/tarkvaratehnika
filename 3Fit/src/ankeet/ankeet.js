import {HttpClient, json} from 'aurelia-fetch-client'
import { LoginService } from '../LoginService'

export class Toitumiskavaankeet {
     questions = [];
     productID;


    activate(params){
      this.productID = params.productID;
      this.addNutritionQuestions()
    }

    addNutritionQuestions(){
        let client = new HttpClient();
        let user = LoginService.getCredentials();
        //QuestionService.getQuestions(user.email, user.password, this.productID)
        //  .then(q => this.questions = q);

        client.fetch('http://localhost:8080/questions',{
            'method': "POST",
            'body': json({email: user.email, password: user.password, productID: this.productID})
        })
          .then(response => response.json())
          .then(data => {
              this.questions = data;
            console.log(this.questions)
          });

    }
}
