import { Router } from 'aurelia-router';

export class hinnakiri{
    
    options = [];
    selectedOption = {};

    constructor() {
        this.options = [
            {id:1, text:'Toitumiskava '}, 
            {id:2, text:'Treeningkava '}, 
            {id:3, text:'Treening ja toitumiskava '}
      ]; 
      this.selectedOption = this.options[0];
   }

   submit() {
       console.log('checked: ' + this.selectedOption.id);
       if(this.selectedOption.id===1){
            location.assign('#/toitumiskavaankeet');
            
       }
       else if(this.selectedOption.id===2){
            location.assign('#/treeningkavaankeet');
       }
       else if(this.selectedOption.id===3){
            location.assign('#/treeningtoitumiskavaankeet');
       } 
   }
    
}