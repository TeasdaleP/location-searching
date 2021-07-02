import { ActionReducerMap, MetaReducer } from "@ngrx/store"
import { Regions } from "./models/regions.interface"
import { hydrationReducer } from "./reducers/hydration.reducer"
import { regionsReducer } from "./reducers/regions.reducer"


export interface AppState {
    regions: Regions[];
}

export const reducers: ActionReducerMap<AppState> = {
    regions: regionsReducer
}

export const metaReducers: MetaReducer[] = [
    hydrationReducer
]