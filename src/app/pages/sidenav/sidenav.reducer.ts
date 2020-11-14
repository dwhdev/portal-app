import { createReducer, on } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { toogleAction } from './sidenav.actions';

export interface State {
    sidebarState: 'open' | 'close';
}

export const initialState: State = {
    sidebarState: 'open',
};

const toogleReducer = createReducer(initialState,
    on(toogleAction, state => ({
        ...state,
        sidebarState: (state.sidebarState === 'open' ? 'close' : 'open') as 'open' | 'close'
    }))
);

export function toogle(state: State, action: TypedAction<'[Side Bar] toogle'>): State {
    return toogleReducer(state, action);
}