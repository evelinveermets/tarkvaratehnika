import {HttpClient, json} from 'aurelia-fetch-client'

export class Treeningkavaankeet {
    trainingData = {}

    addTrainingQuestions(){
        let client = new HttpClient();
      //this.userData.treener = document.getElementById("trainingform").treener.value;
        client.fetch('http://localhost:8080/..',{ //siia tuleb andmebaas juurde
            'method': "POST",
            'body': json(this.trainingData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis"+data.kaal)
        });
        console.log("Method executed!")
    
    }
    
}
