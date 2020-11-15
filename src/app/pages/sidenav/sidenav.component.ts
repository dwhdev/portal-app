import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../../app.reducer';
import { MenuModel, SubMenuModel, MenuItemsModel } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';


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
        private router: Router,
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

    public homeNavigate(): void {
        const state = {
            breadcrumb: ['Inicio']
        };
        this.router.navigate([''], { state });
    }

    public subMenuNavigate(menu: MenuModel, submenu: SubMenuModel): void {
        const state = {
            breadcrumb: [menu.name, submenu.name]
        };
        const routes = [menu.path, submenu.path];
        this.router.navigate(routes, { state })
            .catch(() => this.homeNavigate());
    }

    public itemNavigate(menu: MenuModel, submenu: SubMenuModel, item: MenuItemsModel): void {
        const state = {
            breadcrumb: [menu.name, submenu.name, item.name]
        };
        const routes = [menu.path, submenu.path, item.path];
        this.router.navigate(routes, { state })
            .catch(() => this.homeNavigate());
    }

}
