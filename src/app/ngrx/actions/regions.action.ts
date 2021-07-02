import { Action } from "@ngrx/store";

export const LOAD_REGIONS = '[REGIONS] Load';

export class LoadRegions implements Action {
    readonly type = LOAD_REGIONS;
    constructor() {}
}

export type RegionActions = LoadRegions;