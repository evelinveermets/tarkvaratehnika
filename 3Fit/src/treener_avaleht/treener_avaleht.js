import {inject} from 'aurelia-framework';
import {LoginService2} from '../myTrainerServices';
export class Treener_avaleht {

  constructor() {
    this.trainerName = localStorage.getItem("trainerFirstName");
  }


    logout(){
        LoginService2.logout();
        alert("Logged out");
        this.router.navigateToRoute('#/treener_sisselogimine');
  }
    
}
