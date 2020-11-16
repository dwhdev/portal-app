import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

    private routerSubs: Subscription = new Subscription();

    public breadcrumb: string[] = [];

    constructor(
        private router: Router,
        private breadService: BreadcrumbService
    ) {
        this.breadcrumb = breadService.breadcrumb;
    }

    ngOnInit(): void {
        this.routerSubs = this.router.events
            .pipe(
                filter(e => e instanceof NavigationEnd),
                map(() => this.router.getCurrentNavigation().extras.state),
            ).subscribe(
                e => this.breadService.saveBreadcrumb(e.breadcrumb)
            );
    }

    ngOnDestroy(): void {
        this.routerSubs.unsubscribe();
    }
}
