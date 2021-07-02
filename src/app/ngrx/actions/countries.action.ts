import { Action } from "@ngrx/store";
import { Contenants } from "src/app/enums/contenants.enum";
import { Countries } from "../models/countries.interface";

export const LOAD_COUNTRIES = "[COUNTRIES] Load";
export const LOAD_COUNTRIES_SUCCESS = "[COUNTRIES] Load Success";
export const COUNTRIES_FAILURE = "[COUNTRIES] Failed";

export class LoadCountries implements Action {
    readonly type = LOAD_COUNTRIES;
    constructor(public payload: Contenants) { }
}

export class LoadCountriesSuccess implements Action {
    readonly type = LOAD_COUNTRIES_SUCCESS;
    constructor(public payload: Countries[]) { }
}

export class CountriesFailure implements Action {
    readonly type = COUNTRIES_FAILURE;
    constructor(public payload: any) {}
}

export type CountryActions = LoadCountries | LoadCountriesSuccess | CountriesFailure;