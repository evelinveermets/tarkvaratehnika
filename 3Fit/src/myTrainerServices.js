import {HttpClient, json} from 'aurelia-fetch-client';

export class LoginService2 {
  static client = new HttpClient();

  static logout(){
    localStorage.removeItem("trainerID");
    localStorage.removeItem("trainerEmail");
    localStorage.removeItem("trainerPassword");
    localStorage.removeItem("trainerFirstName");
  }

  static login2(email, password){
    return this.client.fetch('http://localhost:8080/login2',{
        'method': "POST",
        'body': json({email: email, password: password})
      })
        .then(response => response.json())
        .then(trainer => {

          if(trainer.id !== undefined){
            localStorage.setItem("trainerID", trainer.id);
            localStorage.setItem("trainerEmail", trainer.email);
            localStorage.setItem("trainerPassword", trainer.password);
            localStorage.setItem("trainerFirstName", trainer.firstname);
            return trainer.id;
          } else {
            localStorage.removeItem("trainerID");
            localStorage.removeItem("trainerEmail");
            localStorage.removeItem("trainerPassword");
            localStorage.removeItem("trainerFirstName");
            throw new Error(trainer.message);
          }
        });
  }


  static isLoggedIn(){
    return localStorage['trainerID'];
  }

  static isDefinitelyLoggedIn(){
    let email = localStorage['trainerEmail'];
    let password = localStorage['trainerPassword'];
    return this.login2(email, password)
  }

  static getCredentials(){
    return {
      email: localStorage['trainerEmail'],
      password: localStorage['trainerPassword']
    }
  }
}
