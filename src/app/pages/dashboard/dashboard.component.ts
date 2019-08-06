import { Component } from '@angular/core';
var data = [
  {
    "name": "USA",
    "value": 23009
  },
  {
    "name": "Europe",
    "value": 20129
  },
  {
    "name": "Asia",
    "value": 15825
  },
  {
    "name": "Africa",
    "value": 12347
  },
];

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
  })

export class DashboardComponent{
  single: any[];
  multi: any[];

  view: any[] = [700, 400];
  colorScheme = {
    pie:{
      domain: ['#83FCFF', '#5E98D2', '#F4EEBF', '#C39AE5']
    },
    bar:{
      domain: ['#7BC6D3']
    }
  };

  constructor() {
    Object.assign(this, { data })
  }

  onSelect(event) {
    console.log(event);
  }
}

