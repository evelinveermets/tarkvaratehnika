import {HttpClient, json} from 'aurelia-fetch-client'

export class Treeningtoitumiskavaankeet {
    trainingNutritionData = {}

    addTrainingNutritionQuestions(){
        let client = new HttpClient();
      //this.userData.treener = document.getElementById("trainingnutritionform").treener.value;
        client.fetch('http://localhost:8080/..',{ //siia tuleb andmebaas juurde
            'method': "POST",
            'body': json(this.trainingNutritionData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis"+data.kaal)
        });
        console.log("Method executed!")
    
    }
    
}
