import {inject} from 'aurelia-framework';
import {LoginService} from '../LoginService';
import {ProductService} from '../ProductService'
export class hinnakiri{

  products = [];
  selectedOption = {};

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
