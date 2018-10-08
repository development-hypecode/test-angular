import { TestBed } from '@angular/core/testing';

import { ActionMovieService } from './action-movie.service';

describe('ActionMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActionMovieService = TestBed.get(ActionMovieService);
    expect(service).toBeTruthy();
  });
});
