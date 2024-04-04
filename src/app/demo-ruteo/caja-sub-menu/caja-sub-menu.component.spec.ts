import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaSubMenuComponent } from './caja-sub-menu.component';

describe('CajaSubMenuComponent', () => {
  let component: CajaSubMenuComponent;
  let fixture: ComponentFixture<CajaSubMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajaSubMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CajaSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
