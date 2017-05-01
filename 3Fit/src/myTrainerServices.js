import {HttpClient, json} from 'aurelia-fetch-client';

// Export on tähtis
export class TestService {
  val;
  // Kui instantsi ei loo siis peab olema static
  static test(){
  }
}
export class LoginService2 {
  static client = new HttpClient();

  static logout(){
    localStorage.removeItem("trainerID");
    localStorage.removeItem("trainerEmail");
    localStorage.removeItem("trainerPassword");
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
            return trainer.id;
          } else {
            localStorage.removeItem("trainerID");
            localStorage.removeItem("trainerEmail");
            localStorage.removeItem("trainerPassword");
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
