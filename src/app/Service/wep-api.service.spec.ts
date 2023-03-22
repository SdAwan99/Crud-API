import { TestBed } from '@angular/core/testing';

import { WepApiService } from './wep-api.service';

describe('WepApiService', () => {
  let service: WepApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WepApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
