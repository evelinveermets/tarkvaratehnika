import {HttpClient, json} from 'aurelia-fetch-client';

export class TrainerService {

  static client = new HttpClient();

  static getAllTrainers(){
    return this.client.fetch('http://localhost:8080/trainers',{
      'method': "GET"
    })
      .then(response => response.json())

  }

}
