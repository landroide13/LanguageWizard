import { TestBed } from '@angular/core/testing';

import { UiService } from './ui.service';

describe('UiService', () => {
  let service: UiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });
});
