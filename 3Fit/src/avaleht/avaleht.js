import {inject} from 'aurelia-framework';
import {LoginService} from '../LoginService';



export class Avaleht {
    constructor() {
        this.clientName = localStorage.getItem("userFirstName");
    }
    activate(){

    }

  logout(){
    LoginService.logout();
    alert("Logged out");
    this.router.navigateToRoute('home');
  }


}
