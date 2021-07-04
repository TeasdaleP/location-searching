import { COUNTRIES_FAILURE, LOAD_COUNTRIES } from "../actions/countries.action";
import * as reducer from './countries.reducer';

describe('Countries Reducer', () => {
    it('Should return inital state for error failure', () => {
        const action = { type: COUNTRIES_FAILURE } as any;
        const result = reducer.countriesReducer(undefined, action);
        expect(result).toEqual([]);
    });

    it('Should return inital state for error failure', () => {
        const action = { type: LOAD_COUNTRIES } as any;
        const result = reducer.countriesReducer(undefined, action);
        expect(result).toEqual([]);
    });
})