import {inject} from 'aurelia-framework';
import {LoginService} from '../myServices';



export class Avaleht {
    constructor() {
        this.message = "Testing..."
    }
    activate(){

    }

  logout(){
    LoginService.logout();
    alert("Logged out");
    this.router.navigateToRoute('home');
  }


}
