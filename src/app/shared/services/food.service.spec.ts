import { TestBed } from '@angular/core/testing';

import { FoodsService } from './food.service';

describe('FoodService', () => {
  let service: FoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
