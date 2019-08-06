import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { FizzComponent } from '../pages/fizzbuzz/fizzbuzz.component';
import { FactorialComponent } from '../pages/factorial/factorial.component';
import { AppComponent } from '../app.component';


export const routes: Routes = [
  // redirect if no path
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'fizzbuzz',
    component: FizzComponent
  },
  {
    path: 'factorial',
    component: FactorialComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
