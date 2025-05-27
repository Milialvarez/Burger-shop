import { TestBed } from '@angular/core/testing';

import { BurgerCartService } from './burger-cart.service';

describe('BurgerCartService', () => {
  let service: BurgerCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurgerCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
