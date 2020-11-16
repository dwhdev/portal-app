import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbService {

    // tslint:disable-next-line: variable-name
    private _breadcrumb: string[];

    constructor() {
        this.loadBreadcrumb();
    }

    /**
     * Devuelve el breadcrumb de la aplicación.
     */
    public get breadcrumb(): string[] {
        return this._breadcrumb;
    }

    /**
     * Carga el breadcrumb desde el sessionStorage.
     */
    private loadBreadcrumb(): void {
        if (sessionStorage.getItem('breadcrumb')) {
            this._breadcrumb = JSON.parse(sessionStorage.getItem('breadcrumb'));
        }
    }

    /**
     * Almacena el breadcrumb en el sessionStorage.
     * @param breadcrumb el arreglo que contiene el breadcrumb de la aplicación.
     */
    public saveBreadcrumb(breadcrumb: string[]): void {
        this._breadcrumb = breadcrumb;
        sessionStorage.setItem('breadcrumb', JSON.stringify(breadcrumb));
    }

    /**
     * Limpia el breadcrumb del sessionStorage.
     */
    public clearBreadcrumb(): void {
        this._breadcrumb = [];
        sessionStorage.removeItem('breadcrumb');
    }
}
