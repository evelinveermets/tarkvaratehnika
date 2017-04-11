import {HttpClient, json} from 'aurelia-fetch-client'
import {LoginService} from '../myServices';
import {inject} from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class Sisselogimine {
    userData = {};
  loginForm = {};
    router;

  constructor(router : Router) {
    console.clear();
    this.router = router;
    console.log(router);
  }

  activate(){
      console.log("Is logged in: ", LoginService.isLoggedIn());
  }


  login(){
    LoginService.login(this.loginForm.email, this.loginForm.password)
      .then(success => this.router.navigateToRoute('avaleht'))
      .catch(error => console.warn(error.message))
  }

  addUser(){
      this.userData.gender = document.getElementById("registrationform").gender.value;
      LoginService.register(this.userData)
        .then(success => this.router.navigateToRoute('avaleht'))
        .catch(error => console.warn(error.message));
  }
}
