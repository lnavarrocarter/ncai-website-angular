import { TestBed } from '@angular/core/testing';

import { MailjetService } from './mailjet.service';

describe('MailjetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailjetService = TestBed.get(MailjetService);
    expect(service).toBeTruthy();
  });
});
