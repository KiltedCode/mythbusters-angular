import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CanDeactivateGuard } from './guards/';
import { ThemeParksComponent } from './theme-parks/theme-parks.component';
import { ThemeParksListComponent } from './theme-parks/theme-parks-list/theme-parks-list.component';
import { ThemeParkDetailsComponent } from './theme-parks/theme-park-details/theme-park-details.component';

const routes: Routes = [
    { path: '', redirectTo: 'parks', pathMatch: 'full' },
    { path: 'parks', component: ThemeParksComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ThemeParksListComponent },
            { path: 'details/:parkId', component: ThemeParkDetailsComponent, canDeactivate: [ CanDeactivateGuard ] }
        ]
    },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [
        CanDeactivateGuard
    ]
})
export class AppRoutingModule { }