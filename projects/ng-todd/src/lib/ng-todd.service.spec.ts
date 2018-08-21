import { TestBed, inject } from '@angular/core/testing';

import { NgToddService } from './ng-todd.service';

describe('NgToddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgToddService]
    });
  });

  it('should be created', inject([NgToddService], (service: NgToddService) => {
    expect(service).toBeTruthy();
  }));
});
