import { TestBed, async } from '@angular/core/testing';
import { FactorialComponent } from './factorial.component';
import { By } from '@angular/platform-browser';

describe('FactorialComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FactorialComponent],
        }).compileComponents();
    }));
    
    it('Check 0! - result should be 1', () => {
        const fixture = TestBed.createComponent(FactorialComponent);
        fixture.componentInstance.factorial(0);
        expect(fixture.componentInstance.value).toEqual(1);
    });

    it('Check 6! - result should be 720', () => {
        const fixture = TestBed.createComponent(FactorialComponent);
        fixture.componentInstance.factorial(6);
        expect(fixture.componentInstance.value).toEqual(720);
    });

});

