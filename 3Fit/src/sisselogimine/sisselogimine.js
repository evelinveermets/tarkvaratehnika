import {LoginService} from '../LoginService';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Sisselogimine {
    userData = {};
   loginForm = {};
    router;

  constructor(router : Router) {
    console.clear();
    this.router = router;
    console.log(router);
  }

  activate(){
  }

  login(){
    LoginService.login(this.loginForm.email, this.loginForm.password)
      .then(success => this.router.navigateToRoute('avaleht'))
      .catch(error => console.warn(error.message))
  }

  addUser(){
      this.userData.gender = document.getElementById("registrationform").gender.value;
      LoginService.register(this.userData)
        .then(success => window.location.reload(true))
        .catch(error => console.warn(error.message));
  }
function isPasswordValid(input) {
  if (!hasUpperCase(input)) {
    console.log('Kasuta suurt tähte.');
  }
  if (!hasLowerCase(input)) {
    console.log('Kasuta väikest tähte.');
  }
  if (!isLongEnough(input)) {
    console.log('Parool ei ole piisavalt pikk.');
  }
  if (!hasSpecialCharacter(input)) {
    console.log('Kasuta sümbolit.');
  }   
  if (hasUpperCase(input) && hasLowerCase(input) && isLongEnough(input) && hasSpecialCharacter(input)) {
    console.log('Parool on sobiv.');
  } 
}

function hasUpperCase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      return true;
    }
  }
}

function hasLowerCase(input) {
  for (var i=0; i < input.length; i++) {
    if (input[i] === input[i].toLowerCase()) {
      return true;
    }
  }
}

function isLongEnough(input) {
  for (var i=0; i<input.length; i++) {
    if (input.length>=8) {
      return true;
    }
  }
}

function hasSpecialCharacter(input) {
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'];
  for (var i=0; i<input.length; i++) {
    for (var j=0; j<specialCharacters.length; j++) {
      if (input[i]===specialCharacters[j]) {
        return true;
      }
    }
}
