import { LOAD_REGIONS } from '../actions/regions.action';
import { initalRegionState, regionsReducer } from './regions.reducer';

describe('Regions Reducer', () => {
    it('Should return region array for load regions', () => {
        const action = { type: LOAD_REGIONS } as any;
        const result = regionsReducer(undefined, action);
        expect(result).toEqual(initalRegionState);
    })
})