import { TestBed, async } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [DashboardComponent],
    }).compileComponents();
  }));
});
