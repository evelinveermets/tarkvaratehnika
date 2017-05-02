import {HttpClient, json} from 'aurelia-fetch-client';

export class LoginService {
  static client = new HttpClient();

  static logout(){
    localStorage.removeItem("userID");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("userFirstName");
  }

  static login(email, password){
    return this.client.fetch('http://localhost:8080/login',{
        'method': "POST",
        'body': json({email: email, password: password})
      })
        .then(response => response.json())
        .then(user => {

          if(user.id !== undefined){
            localStorage.setItem("userID", user.id);
            localStorage.setItem("userEmail", user.email);
            localStorage.setItem("userPassword", user.password);
            localStorage.setItem("userFirstName", user.firstname);
            return user.id;
          } else {
            localStorage.removeItem("userID");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userPassword");
            localStorage.removeItem("userFirstName");
            throw new Error(user.message);
          }
        });
  }

  static register(userData){
    return this.client.fetch('http://localhost:8080/users/add',{
      'method': "POST",
      'body': json(userData)
    })
      .then(response => response.json())
      .then(user => {
        if(user.id !== undefined){
          localStorage.setItem("userID", user.id);
          localStorage.setItem("userEmail", user.email);
          localStorage.setItem("userPassword", user.password);
          return user.id;
        } else {
          throw new Error(user.message);
        }
      })
  }

  static isLoggedIn(){
    return localStorage['userID'];
  }

  static isDefinitelyLoggedIn(){
    let email = localStorage['userEmail'];
    let password = localStorage['userPassword'];
    return this.login(email, password)
  }

  static getCredentials(){
    return {
      email: localStorage['userEmail'],
      password: localStorage['userPassword']
    }
  }
}
