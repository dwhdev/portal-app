import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

    private routerSubs: Subscription = new Subscription();

    public breadcrumb: string[] = [];

    constructor(private router: Router) {
        this.loadBreadcrumb();
    }

    ngOnInit(): void {
        this.routerSubs = this.router.events
            .pipe(
                filter(e => e instanceof NavigationEnd),
                map(() => this.router.getCurrentNavigation().extras.state),
            ).subscribe(
                e => this.saveBreadcrumb(e.breadcrumb)
            );
    }

    ngOnDestroy(): void {
        this.routerSubs.unsubscribe();
    }

    private loadBreadcrumb(): void {
        if (sessionStorage.getItem('breadcrumb')) {
            this.breadcrumb = JSON.parse(sessionStorage.getItem('breadcrumb'));
        }
    }

    private saveBreadcrumb(breadcrumb: string[]): void {
        this.breadcrumb = breadcrumb;
        sessionStorage.setItem('breadcrumb', JSON.stringify(breadcrumb));
    }

}
