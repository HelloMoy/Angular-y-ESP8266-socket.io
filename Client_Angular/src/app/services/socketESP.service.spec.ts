import { TestBed } from '@angular/core/testing';

import { SocketESPService } from './socketESP.service';

describe('SocketESPService', () => {
  let service: SocketESPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketESPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
