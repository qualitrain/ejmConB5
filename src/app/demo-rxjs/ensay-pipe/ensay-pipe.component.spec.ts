import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsayPipeComponent } from './ensay-pipe.component';

describe('EnsayPipeComponent', () => {
  let component: EnsayPipeComponent;
  let fixture: ComponentFixture<EnsayPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsayPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnsayPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
