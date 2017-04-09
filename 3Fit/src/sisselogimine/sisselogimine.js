import {HttpClient, json} from 'aurelia-fetch-client'

export class Sisselogimine {
    userData = {}

    addUser(){
        let client = new HttpClient();
        client.fetch('http://localhost:8080/users/add',{
            'method': "POST",
            'body': json(this.userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis"+data.email)
        });
        console.log("Method executed!")
    
}
