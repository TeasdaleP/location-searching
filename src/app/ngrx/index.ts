import { ActionReducerMap, MetaReducer } from "@ngrx/store"
import { Countries } from "./models/countries.interface"
import { Regions } from "./models/regions.interface"
import { countriesReducer } from "./reducers/countries.reducer"
import { hydrationReducer } from "./reducers/hydration.reducer"
import { regionsReducer } from "./reducers/regions.reducer"

export interface AppState {
    regions: Regions[];
    countries: Countries[];
}

export const reducers: ActionReducerMap<AppState> = {
    regions: regionsReducer,
    countries: countriesReducer
}

export const metaReducers: MetaReducer[] = [
    hydrationReducer
]