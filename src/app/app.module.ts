import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import { NavbarComponent } from './components/navigation/navbar.component';


import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FizzComponent } from './pages/fizzbuzz/fizzbuzz.component';
import { FactorialComponent } from './pages/factorial/factorial.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FizzComponent,
    FactorialComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports:[NavbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
