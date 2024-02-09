import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaDemoInyectorComponent } from './caja-demo-inyector.component';

describe('CajaDemoInyectorComponent', () => {
  let component: CajaDemoInyectorComponent;
  let fixture: ComponentFixture<CajaDemoInyectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajaDemoInyectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CajaDemoInyectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
