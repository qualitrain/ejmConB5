import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjrContenedorListBoxComponent } from './ejr-contenedor-list-box.component';

describe('EjrContenedorListBoxComponent', () => {
  let component: EjrContenedorListBoxComponent;
  let fixture: ComponentFixture<EjrContenedorListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjrContenedorListBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjrContenedorListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
