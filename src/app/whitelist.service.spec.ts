import { TestBed, inject } from '@angular/core/testing';

import { WhitelistService } from './whitelist.service';

describe('WhitelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhitelistService]
    });
  });

  it('should be created', inject([WhitelistService], (service: WhitelistService) => {
    expect(service).toBeTruthy();
  }));
});
