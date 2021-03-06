import * as country from '../actions/countries.action';

export function countriesReducer(state = [], action: country.CountryActions) {
    switch (action.type) {
        case country.LOAD_COUNTRIES_SUCCESS: {
            return state.concat(action.payload);
        }
        default: {
            return state;
        }
    }
}