import {inject} from 'aurelia-framework';
import {LoginService2} from '../myTrainerServices';
export class Treener_avaleht {
    logout(){
        LoginService.logout();
        alert("Logged out");
        this.router.navigateToRoute('#/treener_sisselogimine');
  }
    
}
