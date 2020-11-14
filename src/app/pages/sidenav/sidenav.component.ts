import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../app.reducer';


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
        private store: Store<AppState>
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
