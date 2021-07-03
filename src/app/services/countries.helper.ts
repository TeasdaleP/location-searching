import { Countries } from "../ngrx/models/countries.interface";

export const mockCountries: Countries[] = [
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