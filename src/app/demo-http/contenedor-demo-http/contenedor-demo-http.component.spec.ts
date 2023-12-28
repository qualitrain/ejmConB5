import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorDemoHttpComponent } from './contenedor-demo-http.component';

describe('ContenedorDemoHttpComponent', () => {
  let component: ContenedorDemoHttpComponent;
  let fixture: ComponentFixture<ContenedorDemoHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorDemoHttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenedorDemoHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
