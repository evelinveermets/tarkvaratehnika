import {inject} from 'aurelia-framework';
import {LoginService} from '../LoginService';
import {Router} from 'aurelia-router';
import {HttpClient, json} from 'aurelia-fetch-client'

@inject(Router)
export class Minukonto {
    router;
    purchases = [];
    constructor(router : Router) {
        this.router = router;
    }

    activate(){
      console.log("LOADED");
      this.loadPurchases();
    }

    logout(){
      LoginService.logout();
      alert("Logged out");
      this.router.navigateToRoute('home');
    }

  loadPurchases() {
    let client = new HttpClient();
    let user = LoginService.getCredentials();
    client.fetch("http://localhost:8080/purchases", {
      method: "POST",
      body: json(user)
    })
      .then(data => data.json())
      .then(p => {
        console.log(p);
        return this.purchases = p;
      })
      .catch(e => console.error(e));
  }
}
