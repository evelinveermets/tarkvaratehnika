import {inject} from 'aurelia-framework';
import {LoginService} from '../LoginService';
import {ProductService} from '../ProductService'
import {Router} from 'aurelia-router';

@inject(Router)
export class hinnakiri{
  products = [];
  selectedOption = {};
  router;

  constructor(router : Router) {
    this.router = router;
  }

  activate(){
    let user = LoginService.getCredentials();
    ProductService.getProducts(user.email, user.password)
    .then(p => {
      this.products = p;
      this.selectedOption = this.products[0];
      console.log("Products loaded...",p);
      return p;
    })
    .catch(e => console.warn(e));
  }

logout(){
  LoginService.logout();
  alert("Logged out");
  this.router.navigateToRoute('home');
}
  submit() {
    location.assign('#/ankeet/'+this.selectedOption.id);
  }

}
