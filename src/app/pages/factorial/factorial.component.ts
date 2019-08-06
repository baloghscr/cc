import { Component } from '@angular/core';

@Component({
    selector: 'factorial',
    templateUrl: './factorial.component.html',
    styleUrls: ['./factorial.component.scss']
})

export class FactorialComponent{
  value;
  factorial(number){
    const numberpattern = /[0-9\+\-\ ]/;
    console.log(number);
    if(number >= 1){
      return this.value = number * this.factorial(number - 1);
    }else if(number == 0){
      return this.value = 1;
    } else{
      return this.value = null;
    }
  }

}

