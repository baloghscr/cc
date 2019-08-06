import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
  })
export class NavbarComponent{
  items = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      order: 1
    },
    {
      name: 'FizzBuzz',
      path: '/fizzbuzz',
      order: 2
    },
    {
      name: 'Factorial',
      path: '/factorial',
      order: 3
    },
  ]; 
}

