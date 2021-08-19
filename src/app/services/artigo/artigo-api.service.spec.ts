import { TestBed } from '@angular/core/testing';

import { ArtigoApiService } from './artigo-api.service';

describe('ArtigoApiService', () => {
  let service: ArtigoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtigoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
