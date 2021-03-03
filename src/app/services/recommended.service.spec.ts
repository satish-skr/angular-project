import { TestBed } from '@angular/core/testing';

import { RecommendedService } from './recommended.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';

describe('RecommendedService', () => {
  let service: RecommendedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
    });
    service = TestBed.inject(RecommendedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
