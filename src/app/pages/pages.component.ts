import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '@app/app.reducer';

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

}
