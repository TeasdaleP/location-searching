import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CountryService } from './country.service';
import { environment } from 'src/environments/environment';
import { Contenants } from '../enums/contenants.enum';
import { mockCountries } from './countries.helper';

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
       
        service.getCounties$(Contenants.Asia).subscribe((countries) => {
            expect(countries.length).toBe(1);
            expect(countries).toEqual(mockCountries);
            done();
        });

        const req = httpMock.expectOne(url);
        expect(req.request.method).toBe("GET");
        req.flush(mockCountries);
        httpMock.verify();
    });
});