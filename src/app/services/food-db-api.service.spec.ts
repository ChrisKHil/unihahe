import { TestBed } from '@angular/core/testing';

import { FoodDbApiService } from './food-db-api.service';

describe('FoodDbApiService', () => {
  let service: FoodDbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodDbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
