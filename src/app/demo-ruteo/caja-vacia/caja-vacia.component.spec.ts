import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaVaciaComponent } from './caja-vacia.component';

describe('CajaVaciaComponent', () => {
  let component: CajaVaciaComponent;
  let fixture: ComponentFixture<CajaVaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajaVaciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CajaVaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
