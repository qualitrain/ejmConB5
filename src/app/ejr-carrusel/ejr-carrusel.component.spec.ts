import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjrCarruselComponent } from './ejr-carrusel.component';

describe('EjrCarruselComponent', () => {
  let component: EjrCarruselComponent;
  let fixture: ComponentFixture<EjrCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjrCarruselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjrCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
