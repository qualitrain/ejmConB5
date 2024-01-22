import { TestBed } from '@angular/core/testing';

import { ProvDatPersonaMockService } from './prov-dat-persona-mock.service';

describe('ProvDatPersonaMockService', () => {
  let service: ProvDatPersonaMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvDatPersonaMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
