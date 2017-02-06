import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes.component'
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module'

import { HeroService } from "./hero.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        AppRoutingModule
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
