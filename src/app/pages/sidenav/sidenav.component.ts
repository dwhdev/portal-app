import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';


import { AppState } from '@app/app.reducer';

import { MenuService } from '@services/menu.service';
import { NavigationService } from '@services/navigation.service';


@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {

    public expanded: boolean;
    public rail = false;
    private sidebarStateSubs: Subscription;

    constructor(
        private store: Store<AppState>,
        public navService: NavigationService,
        public menuService: MenuService
    ) { }

    ngOnInit(): void {
        this.sidebarStateSubs = this.store
            .select('sidenav')
            .subscribe(({ sidebarState: state }) => this.expanded = state === 'open');
    }

    ngOnDestroy(): void {
        this.sidebarStateSubs.unsubscribe();
    }

}
