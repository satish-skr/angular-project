import { TestBed } from '@angular/core/testing';

import { CricapiService } from './cricapi.service';
import { HttpClientModule } from '@angular/common/http';
import { Find } from '../models/find';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('CricapiService', () => {
  let service: CricapiService;
  let mockUsers: Find[];

  beforeEach(() => {
   
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule], 

    });
    service = TestBed.inject(CricapiService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 
});


