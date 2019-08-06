import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navigation/navbar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FizzComponent } from './pages/fizzbuzz/fizzbuzz.component';
import { FactorialComponent } from './pages/factorial/factorial.component';

describe('AppComponent', () => {
  const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'fizzbuzz', component: FizzComponent },
    { path: 'factorial', component: FactorialComponent }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxChartsModule,
        RouterModule.forRoot(routes)
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        FizzComponent,
        FactorialComponent,
        NavbarComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have create top navigation`, () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const nav = fixture.debugElement.componentInstance;
    expect(nav).toBeTruthy();
  });
});
