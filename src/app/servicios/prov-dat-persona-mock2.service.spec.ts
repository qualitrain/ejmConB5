import { TestBed } from '@angular/core/testing';

import { ProvDatPersonaMock2Service } from './prov-dat-persona-mock2.service';

describe('ProvDatPersonaMock2Service', () => {
  let service: ProvDatPersonaMock2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvDatPersonaMock2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
