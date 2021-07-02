import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { CountryService } from './country.service';

describe('Country Service', () => {
  let service: CountryService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  
  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [CountryService]
      });
      
      service = TestBed.inject(CountryService);
      httpMock = TestBed.inject(HttpTestingController);
      httpClient = TestBed.inject(HttpClient);
  });

  it('Service should be created', () => {
      expect(service).toBeTruthy();
  });
});
