import {inject} from 'aurelia-framework';
import {LoginService} from '../LoginService';
import {Router} from 'aurelia-router';


@inject(Router)
export class Minukonto {
    router;

    constructor(router : Router) {
        this.router = router;
    }

  logout(){
    LoginService.logout();
    alert("Logged out");
    this.router.navigateToRoute('home');
  }
    
}
