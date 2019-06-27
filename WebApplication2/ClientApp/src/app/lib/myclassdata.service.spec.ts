import { TestBed, inject } from '@angular/core/testing';

import { MyclassdataService } from './myclassdata.service';

describe('MyclassdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyclassdataService]
    });
  });

  it('should be created', inject([MyclassdataService], (service: MyclassdataService) => {
    expect(service).toBeTruthy();
  }));
});
