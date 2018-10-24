import { TestBed } from '@angular/core/testing';

import { moviesService } from './movies.service';

describe('NowPlayingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: moviesService = TestBed.get(moviesService);
    expect(service).toBeTruthy();
  });
});
