import { Component } from '@angular/core';

@Component({
    selector: 'fizzbuzz',
    templateUrl: './fizzbuzz.component.html',
    styleUrls: ['./fizzbuzz.component.scss']
  })
export class FizzComponent{
  fizzbuzz;
  
  getFizzBuzz(){
    var find = function(n) {
      if (n % 3 === 0) {
        return 'Fizz';
      } else if (n % 5 === 0) {
        return 'Buzz';
      } else if(n % 15 === 0) {
        return 'FizzBuzz';
      } else {
        return n;
      }
    };

    var res = [];
    for(var i =1; i <= 100; i++){
      res.push(find(i)); 
    }

    return this.fizzbuzz = res;
  };

  clearFizzBuzz(){
    return this.fizzbuzz = [];
  }
}

