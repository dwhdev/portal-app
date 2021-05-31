import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '@app/app.reducer';
import { closedAction, openedAction } from './sidenav/sidenav.actions';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

    public openedSidenav: boolean;
    public railSidenav = false;

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this.store.select('sidenav').subscribe(({ sidebarState }) => {
            this.openedSidenav = sidebarState === 'open';
        });

    }

    onChangeNavbar(e: boolean): void {
        if (e) {
            this.store.dispatch(openedAction());
        } else {
            this.store.dispatch(closedAction());
        }
    }

}
