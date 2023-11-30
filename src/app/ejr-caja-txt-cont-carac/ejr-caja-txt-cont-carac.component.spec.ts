import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjrCajaTxtContCaracComponent } from './ejr-caja-txt-cont-carac.component';

describe('EjrCajaTxtContCaracComponent', () => {
  let component: EjrCajaTxtContCaracComponent;
  let fixture: ComponentFixture<EjrCajaTxtContCaracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjrCajaTxtContCaracComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjrCajaTxtContCaracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
