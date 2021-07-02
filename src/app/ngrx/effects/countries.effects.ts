import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { CountryService } from "src/app/services/country.service";
import { catchError, map, mergeMap } from "rxjs/operators";

import * as countries from '../actions/countries.action';
import { of } from "rxjs";

@Injectable()
export class CountriesEffects {

    @Effect()
    loadCountries$ = this.actions$.pipe(
        ofType<countries.LoadCountries>(countries.LOAD_COUNTRIES),
        mergeMap(action => {
            return this.countryService.getCounties$(action.payload).pipe(
                map(data => {
                    return new countries.LoadCountriesSuccess(data);
                }),
                catchError(error => of(new countries.CountriesFailure(error)))
            )
        })
    )

    constructor(private countryService: CountryService, private actions$: Actions) { }
}