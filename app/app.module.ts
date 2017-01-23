import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

import {HeroService} from "./hero.service";


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
              component: HeroesComponent
          },
          {
              path: 'dashboard',
              component:　DashboardComponent
          }
        ])
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent
    ],
    providers: [HeroService],
    bootstrap: [ AppComponent ]
})

export class AppModule {

}
