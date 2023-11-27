import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajasQueCambianColorComponent } from './cajas-que-cambian-color.component';

describe('CajasQueCambianColorComponent', () => {
  let component: CajasQueCambianColorComponent;
  let fixture: ComponentFixture<CajasQueCambianColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajasQueCambianColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CajasQueCambianColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
