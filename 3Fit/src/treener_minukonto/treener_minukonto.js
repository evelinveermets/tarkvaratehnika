import {inject} from 'aurelia-framework';
import {TrainerLoginService} from '../TrainerLoginService';
import {Router} from 'aurelia-router';

@inject(Router)
export class Treener_minukonto {
    router;

    constructor(router : Router){
      this.router = router;
    }


    logout(){
    TrainerLoginService.logout();
    alert("Olete edukalt välja logitud");
    this.router.navigateToRoute('treener_sisselogimine');
  }
    
}
