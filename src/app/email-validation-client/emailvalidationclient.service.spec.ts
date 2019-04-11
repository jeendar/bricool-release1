import { TestBed } from '@angular/core/testing';

import { EmailvalidationclientService } from './emailvalidationclient.service';

describe('EmailvalidationclientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailvalidationclientService = TestBed.get(EmailvalidationclientService);
    expect(service).toBeTruthy();
  });
});
