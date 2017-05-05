import {inject} from 'aurelia-framework';
import {TrainerLoginService} from '../TrainerLoginService';
import {Router} from 'aurelia-router';


@inject(Router)
export class Treener_tellijad {
    router;

    constructor(router : Router) {
      this.router = router;
    }

    logout(){
    TrainerLoginService.logout();
    alert("Logged out");
    this.router.navigateToRoute('treener_sisselogimine');
  }
    
}
