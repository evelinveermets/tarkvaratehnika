import {HttpClient, json} from 'aurelia-fetch-client'

export class Toitumiskavaankeet {
     nutritionData = {}

    addNutritionQuestions(){
        let client = new HttpClient();
      //this.userData.treener = document.getElementById("nutritionform").treener.value;
        client.fetch('http://localhost:8080/..',{ //andmebaasi järgi tuleb siia juurde veel
            'method': "POST",
            'body': json(this.nutritionData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis"+data.kaal)
        });
        console.log("Method executed!")
    
    }
    
}
