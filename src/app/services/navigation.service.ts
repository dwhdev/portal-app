import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemsModel, MenuModel, SubMenuModel } from '../models/menu.model';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    constructor(private router: Router) { }

    public homeNavigate(): void {
        const state = {
            breadcrumb: ['Inicio']
        };
        this.router.navigate([''], { state });
    }

    public loginNavigate(): void {
        const state = {};
        this.router.navigate(['login'], { state });
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
