import { TestBed } from '@angular/core/testing';

import { FdjService } from './fdj.service';

describe('FdjService', () => {
  let service: FdjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FdjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
