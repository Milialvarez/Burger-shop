import { TestBed } from '@angular/core/testing';

import { BurgersDataApiService } from './burgers-data-api.service';

describe('BurgersDataApiService', () => {
  let service: BurgersDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurgersDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
