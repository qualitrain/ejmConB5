import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorDemoDirectivaComponent } from './contenedor-demo-directiva.component';

describe('ContenedorDemoDirectivaComponent', () => {
  let component: ContenedorDemoDirectivaComponent;
  let fixture: ComponentFixture<ContenedorDemoDirectivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorDemoDirectivaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenedorDemoDirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
