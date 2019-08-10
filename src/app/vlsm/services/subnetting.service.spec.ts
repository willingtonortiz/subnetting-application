import { TestBed } from '@angular/core/testing';

import { SubnettingService } from './subnetting.service';

describe('SubnettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubnettingService = TestBed.get(SubnettingService);
    expect(service).toBeTruthy();
  });
});
