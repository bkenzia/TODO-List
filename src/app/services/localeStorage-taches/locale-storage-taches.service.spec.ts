import { TestBed } from '@angular/core/testing';

import { LocaleStorageTachesService } from './locale-storage-taches.service';

describe('LocaleStorageTachesService', () => {
  let service: LocaleStorageTachesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaleStorageTachesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
