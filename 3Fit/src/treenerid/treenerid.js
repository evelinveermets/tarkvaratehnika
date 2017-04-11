import {inject} from 'aurelia-framework';
import {LoginService} from '../myServices';


export class Treenerid {
    constructor() {
        this.message = "Testing..."
    }


  logout(){
    LoginService.logout();
    alert("Logged out");
    this.router.navigateToRoute('home');
  }
}
