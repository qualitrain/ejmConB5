import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorSelectAlternativaComponent } from './contenedor-select-alternativa.component';

describe('ContenedorSelectAlternativaComponent', () => {
  let component: ContenedorSelectAlternativaComponent;
  let fixture: ComponentFixture<ContenedorSelectAlternativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorSelectAlternativaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenedorSelectAlternativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
