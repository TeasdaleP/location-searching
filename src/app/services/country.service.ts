import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contenants } from '../enums/contenants.enum';
import { CountryRaw } from '../ngrx/models/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCounties$(contenant: Contenants): Observable<CountryRaw[]> {
    return this.http.get<CountryRaw[]>(`${environment.endpoints.countries}/${contenant}`);
  }
}
