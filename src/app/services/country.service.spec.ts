import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CountryService } from './country.service';
import { environment } from 'src/environments/environment';
import { Contenants } from '../enums/contenants.enum';
import { Countries } from '../ngrx/models/countries.interface';

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

    it('Should verify the HTTP call is of type GET', () => {
        let url = `${environment.endpoints.countries}/${Contenants.Europe}`
        let result;
        service.getCounties$(Contenants.Europe).subscribe(countries => {
            result = countries;
        });

        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual("GET");
        expect(req.request.url).toEqual(url);
        httpMock.verify();
    });

    it('Should return an array of Countries', (done) => {
        let url = `${environment.endpoints.countries}/${Contenants.Asia}`
        const dummyCountries: Countries[] = [ 
            {
                alpha2Code: 'alpha2Code',
                alpha3Code: 'alpha3Code',
                altSpellings: ['alt', 'speillings'],
                area: 12345,
                borders: ['border-one', 12345, 'border-two'],
                callingCodes: ['calling', 'codes'],
                capital: 'capital',
                cioc: 'cioc',
                currency: [{}],
                demonym: 'demonym',
                flag: 'https://url.com/flag',
                gini: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                languages: [{}],
                latlng: [12345, 67890],
                name: 'countries-name',
                nativeName: 'native',
                numericCode: 'COUNT',
                population: 1234,
                region: 'asia',
                regionalBlocs: [{}],
                subregion: 'south-asia',
                timezones: ['GMT+1', 'GMT+2'],
                topLevelDomain: ['com.asia'],
                translations: {}
            }
          ];
      
          service.getCounties$(Contenants.Asia).subscribe((countries) => {
            expect(countries.length).toBe(1);
            expect(countries).toEqual(dummyCountries);
            done();
          });
      
          const req = httpMock.expectOne(url);
          expect(req.request.method).toBe("GET");
          req.flush(dummyCountries);
          httpMock.verify();
    });
});