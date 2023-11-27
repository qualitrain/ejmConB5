import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaB5Component } from './lista-b5.component';

describe('ListaB5Component', () => {
  let component: ListaB5Component;
  let fixture: ComponentFixture<ListaB5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaB5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaB5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
