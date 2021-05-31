import { createReducer, on } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { closedAction, openedAction, toogleAction } from './sidenav.actions';

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
    })),
    on(openedAction, state => ({
        ...state,
        sidebarState: 'open' as 'open' | 'close'
    })),
    on(closedAction, state => ({
        ...state,
        sidebarState: 'close' as 'open' | 'close'
    }))
);

export function toogle(state: State, action: TypedAction<'[Side Bar] toogle'>): State {
    return toogleReducer(state, action);
}