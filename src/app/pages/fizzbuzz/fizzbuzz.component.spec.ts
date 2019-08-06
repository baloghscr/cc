import { TestBed, async } from '@angular/core/testing';
import { FizzComponent } from './fizzbuzz.component';
import { By } from '@angular/platform-browser';

describe('FizzComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FizzComponent],
        }).compileComponents();
    }));

    it('should call getFizzBuzz method', () => {
        const fixture = TestBed.createComponent(FizzComponent);
        const onClickMock = spyOn(fixture.componentInstance, 'getFizzBuzz');
        fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('FizzBuzz length result should be 100', () => {
        const fixture = TestBed.createComponent(FizzComponent);
        fixture.componentInstance.fizzbuzz = null;

        var result = fixture.componentInstance.getFizzBuzz();
        expect(result.length).toBeGreaterThanOrEqual(100);
    
    });

});
