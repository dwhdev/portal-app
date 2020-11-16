import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';


import { BreadcrumbService } from '@services/breadcrumb.service';
import { NavigationService } from '@services/navigation.service';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

    private routerSubs: Subscription = new Subscription();

    constructor(
        private router: Router,
        public breadService: BreadcrumbService,
        public navService: NavigationService
    ) { }

    ngOnInit(): void {
        this.routerSubs = this.router.events
            .pipe(
                filter(e => e instanceof NavigationEnd),
                map(() => this.router.getCurrentNavigation().extras.state),
            ).subscribe(e => {
                this.breadService.saveBreadcrumb(e.breadcrumb);
            });
    }

    ngOnDestroy(): void {
        this.routerSubs.unsubscribe();
    }
}
