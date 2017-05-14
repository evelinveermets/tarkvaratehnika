import {inject} from 'aurelia-framework';
import {LoginService} from '../LoginService';
import {Router} from 'aurelia-router';

@inject(Router)
export class Avaleht {
    router;


    constructor(router : Router) {
        this.router = router;
        this.clientName = localStorage.getItem("userFirstName");
    }
    activate(){

    }

  logout(){
    LoginService.logout();
    alert("Olete edukalt välja logitud");
    this.router.navigateToRoute('home');
  }


}
