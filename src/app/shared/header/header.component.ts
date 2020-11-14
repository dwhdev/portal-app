import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


import { AppState } from '@app/app.reducer';
import { toogleAction } from '@pages/sidenav/sidenav.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void { }

    public toogle = () => {
        this.store.dispatch(toogleAction());
    };

}
