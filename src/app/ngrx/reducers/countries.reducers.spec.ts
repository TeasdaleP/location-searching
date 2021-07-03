import { mockCountries } from "src/app/helpers/countries.helper";
import { COUNTRIES_FAILURE, LOAD_COUNTRIES, LOAD_COUNTRIES_SUCCESS } from "../actions/countries.action";
import { countriesReducer } from "./countries.reducer";


describe('Countries Reducer', () => {
    it('Should return inital state for error failure', () => {
        const action = { type: COUNTRIES_FAILURE } as any;
        const result = countriesReducer(undefined, action);
        expect(result).toEqual([]);
    });

    it('Should return inital state for error failure', () => {
        const action = { type: LOAD_COUNTRIES } as any;
        const result = countriesReducer(undefined, action);
        expect(result).toEqual([]);
    });

    it('Should return countries array for successful request', () => {
        const action = { type: LOAD_COUNTRIES_SUCCESS } as any;
        const result = countriesReducer(mockCountries, action);
        expect(result.length).toEqual(1);
    });
})