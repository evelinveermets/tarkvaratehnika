import {inject} from 'aurelia-framework';
import {TrainerLoginService} from '../TrainerLoginService';
import {Router} from 'aurelia-router';


@inject(Router)
export class Treener_avaleht {
  router;

  constructor(router : Router) {
    this.router = router;
    this.trainerName = TrainerLoginService.getTrainer().firstName;
  }


    logout(){
        TrainerLoginService.logout();
        alert("Logged out");
        this.router.navigateToRoute('treener_sisselogimine');
  }
    
}
