import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes.component'
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

import { HeroService } from "./hero.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },{
                path: 'heroes',
                component: HeroComponent
            },{
                path: 'dashboard',
                component: DashboardComponent
            },{
                path: 'detail/:id',
                component: HeroDetailComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        HeroComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {

}
