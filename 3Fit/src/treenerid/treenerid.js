import {inject} from 'aurelia-framework';
import {LoginService} from '../LoginService';
import {Router} from 'aurelia-router';
import {HttpClient, json} from 'aurelia-fetch-client'


@inject(Router)
export class Treenerid {
    trainers = [];
    router;

    constructor(router : Router) {
        this.router = router;

    }
    activate() {
      this.loadTrainers();
    }


  logout(){
    LoginService.logout();
    alert("Olete edukalt välja logitud");
    this.router.navigateToRoute('home');
  }

  loadTrainers() {
    let client = new HttpClient();
    let user = LoginService.getCredentials();

    client.fetch('http://localhost:8080/trainers',{
      'method': "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.trainers = data;
        console.log("trainers",data);
      })
      .catch(error => console.error("Failed to load trainers' list", error))
  }
}
