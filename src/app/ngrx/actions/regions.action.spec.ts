import { LoadRegions, LOAD_REGIONS } from './regions.action';

describe('Regions action', () => {
    it('Should call load region action', () => {
        const action = new LoadRegions();
        expect(action.type).toEqual(LOAD_REGIONS);
    });
});