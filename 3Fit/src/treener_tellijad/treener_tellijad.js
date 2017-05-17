import {inject} from 'aurelia-framework';
import {TrainerLoginService} from '../TrainerLoginService';
import {PurchaseService} from '../PurchaseService';
import {Router} from 'aurelia-router';


@inject(Router)
export class Treener_tellijad {
    router;
    purchases = [];

    constructor(router : Router) {
      this.router = router;
      this.loadPurchases();
    }

  loadPurchases() {
    let cred = TrainerLoginService.getCredentials();
    PurchaseService.getPurchasesToTrainer(cred.email, cred.password)
      .then(res => this.purchases = res)
      .then(x => console.log(this))
  }
  openPurchase(id){
      this.router.navigateToRoute("kysimustiku_vastused",{id:id});
  }

    markAsPaid(purchase){
      let trainer = TrainerLoginService.getCredentials();
      PurchaseService.markAsPaid(trainer.email, trainer.password, purchase.id)
        .then(response => {
          this.purchases = this.purchases.filter(p => p !== purchase);
          this.purchases.push(response);
          return response;
        })
        .then(response => console.log("Purchase marked as paid", response))
        .then(response => this.loadPurchases())
        .catch(console.error);
    }


    logout(){
      TrainerLoginService.logout();
      alert("Logged out");
      this.router.navigateToRoute('treener_sisselogimine');
    }
    
}
