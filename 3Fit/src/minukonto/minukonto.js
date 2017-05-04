import {inject} from 'aurelia-framework';
import {LoginService} from '../LoginService';

export class Minukonto {
    constructor() {
        this.message = "Testing..."
    }

  logout(){
    LoginService.logout();
    alert("Logged out");
    this.router.navigateToRoute('home');
  }
    
}
