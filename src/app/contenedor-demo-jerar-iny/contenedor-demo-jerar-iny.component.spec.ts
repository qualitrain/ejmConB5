import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorDemoJerarInyComponent } from './contenedor-demo-jerar-iny.component';

describe('ContenedorDemoJerarInyComponent', () => {
  let component: ContenedorDemoJerarInyComponent;
  let fixture: ComponentFixture<ContenedorDemoJerarInyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorDemoJerarInyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenedorDemoJerarInyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
