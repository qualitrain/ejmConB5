import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaRuteoComponent } from './caja-ruteo.component';

describe('CajaRuteoComponent', () => {
  let component: CajaRuteoComponent;
  let fixture: ComponentFixture<CajaRuteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajaRuteoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CajaRuteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
