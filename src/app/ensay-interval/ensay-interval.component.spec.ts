import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsayIntervalComponent } from './ensay-interval.component';

describe('EnsayIntervalComponent', () => {
  let component: EnsayIntervalComponent;
  let fixture: ComponentFixture<EnsayIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsayIntervalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnsayIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
