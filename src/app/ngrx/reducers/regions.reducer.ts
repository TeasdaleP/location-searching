import { Contenants } from 'src/app/enums/contenants.enum';
import * as regions from '../actions/regions.action';
import { Regions } from '../models/regions.interface';

export const initalRegionState: Regions[] = [
    { name: Contenants.Europe },
    { name: Contenants.Asia }
]

export function regionsReducer(state = [], action: regions.RegionActions) {
    switch(action.type) {
        case regions.LOAD_REGIONS: {
            return initalRegionState
        }
        default: {
            return state;
        }
    }
}