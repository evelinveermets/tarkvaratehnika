import {HttpClient, json} from 'aurelia-fetch-client';

export class ProductService {

  static client = new HttpClient();

  static getProducts(email, password){
    return this.client.fetch('http://localhost:8080/products',{
      'method': "POST",
      'body': json({email: email, password: password})
    })
    .then(response => response.json())

  }

}
