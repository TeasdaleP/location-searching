import { Contenants } from 'src/app/enums/contenants.enum';
import { mockCountries } from 'src/app/services/countries.helper';
import { CountriesFailure, COUNTRIES_FAILURE, LoadCountries, LoadCountriesSuccess, LOAD_COUNTRIES, LOAD_COUNTRIES_SUCCESS } from './countries.action';

describe('Countries action', () => {
    it('Should call load countries action', () => {
        const action = new LoadCountries(Contenants.Asia);
        expect(action.type).toEqual(LOAD_COUNTRIES);
        expect(action.payload).toEqual(Contenants.Asia)
    });

    it('Should call load countries successfuly action', () => {
        const action = new LoadCountriesSuccess(mockCountries);
        expect(action.type).toEqual(LOAD_COUNTRIES_SUCCESS);
        expect(action.payload).toEqual(mockCountries);
    });

    it('Should call the countries failure action', () => {
        const action = new CountriesFailure({ error: 'something has gone wrong', status: 404 })
        expect(action.type).toEqual(COUNTRIES_FAILURE);
        expect(action.payload).toBeDefined();
    })
});