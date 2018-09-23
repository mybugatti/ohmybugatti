import { TestBed, inject } from '@angular/core/testing';

import { BddService } from './bdd.service';

describe('BddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BddService]
    });
  });

  it('should be created', inject([BddService], (service: BddService) => {
    expect(service).toBeTruthy();
  }));
});
