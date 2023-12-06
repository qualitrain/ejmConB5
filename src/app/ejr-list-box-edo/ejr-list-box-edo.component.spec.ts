import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjrListBoxEdoComponent } from './ejr-list-box-edo.component';

describe('EjrListBoxEdoComponent', () => {
  let component: EjrListBoxEdoComponent;
  let fixture: ComponentFixture<EjrListBoxEdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjrListBoxEdoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjrListBoxEdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
