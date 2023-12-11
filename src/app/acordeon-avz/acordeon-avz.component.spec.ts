import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordeonAvzComponent } from './acordeon-avz.component';

describe('AcordeonAvzComponent', () => {
  let component: AcordeonAvzComponent;
  let fixture: ComponentFixture<AcordeonAvzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcordeonAvzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcordeonAvzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
