import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorDemoInyVistaComponent } from './contenedor-demo-iny-vista.component';

describe('ContenedorDemoInyVistaComponent', () => {
  let component: ContenedorDemoInyVistaComponent;
  let fixture: ComponentFixture<ContenedorDemoInyVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorDemoInyVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenedorDemoInyVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
