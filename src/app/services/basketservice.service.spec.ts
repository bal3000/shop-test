/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BasketserviceService } from './basketservice.service';

describe('Service: Basketservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasketserviceService]
    });
  });

  it('should ...', inject([BasketserviceService], (service: BasketserviceService) => {
    expect(service).toBeTruthy();
  }));
});
