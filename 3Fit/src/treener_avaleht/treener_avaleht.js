import {inject} from 'aurelia-framework';
import {TrainerLoginService} from '../TrainerLoginService';
import {Router} from 'aurelia-router';
import {PurchaseService} from '../PurchaseService'


@inject(Router)
export class Treener_avaleht {
  router;

  constructor(router : Router) {
    this.router = router;
    this.trainerName = TrainerLoginService.getTrainer().firstName;
  }

  activate(){
    var trainer = TrainerLoginService.getCredentials();
    PurchaseService.getPurchasesToTrainer(trainer.email, trainer.password)
      .then(purchases => {
        this.productsAmount = purchases.filter(p => p.purchasedItem === null).length
      })
  }


    logout(){
        TrainerLoginService.logout();
        alert("Olete edukalt välja logitud");
        this.router.navigateToRoute('treener_sisselogimine');
  }
    
}
