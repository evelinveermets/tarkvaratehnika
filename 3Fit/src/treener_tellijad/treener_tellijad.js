import {inject} from 'aurelia-framework';
import {TrainerLoginService} from '../TrainerLoginService';

export class Treener_tellijad {
    logout(){
    LoginService.logout();
    alert("Logged out");
    this.router.navigateToRoute('#/treener_sisselogimine');
  }
    
}
