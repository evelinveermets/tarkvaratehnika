import {inject} from 'aurelia-framework';
import {LoginService} from '../LoginService';
import {TrainerService} from '../TrainerService'
import {Router} from 'aurelia-router';

@inject(Router)
export class Treenerid {
    trainers = [];
    router;

    constructor(router : Router) {
        this.router = router;
    }

  activate(){
    let user = LoginService.getCredentials();
    TrainerService.getAllTrainers(user.email, user.password)
      .then(t => {
        this.trainers = t;
        console.log("Trainers loaded...",t);
        return t;
      })
      .catch(e => console.warn(e));
  }


  logout(){
    LoginService.logout();
    alert("Logged out");
    this.router.navigateToRoute('home');
  }
}
