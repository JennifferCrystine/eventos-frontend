import { TestBed } from '@angular/core/testing';

import { VolumesApiService } from './volume-api.service';

describe('VolumesApiService', () => {
  let service: VolumesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolumesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
