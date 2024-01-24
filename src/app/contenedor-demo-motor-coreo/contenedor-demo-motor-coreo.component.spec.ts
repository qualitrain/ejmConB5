import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorDemoMotorCoreoComponent } from './contenedor-demo-motor-coreo.component';

describe('ContenedorDemoMotorCoreoComponent', () => {
  let component: ContenedorDemoMotorCoreoComponent;
  let fixture: ComponentFixture<ContenedorDemoMotorCoreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorDemoMotorCoreoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenedorDemoMotorCoreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
