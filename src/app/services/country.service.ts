import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contenants } from '../enums/contenants.enum';
import { Countries } from '../ngrx/models/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCounties$(contenant: Contenants): Observable<Countries[]> {
    return this.http.get<Countries[]>(`${environment.endpoints.countries}/${contenant}`);
  }
}
