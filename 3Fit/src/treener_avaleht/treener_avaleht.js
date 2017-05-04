import {inject} from 'aurelia-framework';
import {TrainerLoginService} from '../TrainerLoginService';
export class Treener_avaleht {

  constructor() {
    this.trainerName = TrainerLoginService.getTrainer().firstName;
  }


    logout(){
        TrainerLoginService.logout();
        alert("Logged out");
        this.router.navigateToRoute('#/treener_sisselogimine');
  }
    
}
