import {HttpClient, json} from 'aurelia-fetch-client'
import {LoginService2} from '../myTrainerServices';
import {inject} from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class treener_sisselogimine {
    trainerData = {};
    loginForm2 = {};
    router;

  constructor(router : Router) {
    console.clear();
    this.router = router;
    console.log(router);
  }

  activate(){
      console.log("Is logged in: ", LoginService2.isLoggedIn());
  }


  login2(){
    LoginService2.login2(this.loginForm2.email, this.loginForm2.password)
      .then(success => this.router.navigateToRoute('treener_avaleht'))
      .catch(error => console.warn(error.message))
  }


}
