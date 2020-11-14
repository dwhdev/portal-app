import { ActionReducerMap } from '@ngrx/store';

import * as sidenav from './pages/sidenav/sidenav.reducer';

export interface AppState {
    sidenav: sidenav.State;
}

export const appReducers: ActionReducerMap<AppState> = {
    sidenav: sidenav.toogle
};
