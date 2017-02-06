import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './types/hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/templates/hero-detail.template.html',
    styleUrls: ['app/styles/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    hero: Hero;
    constructor(
        private heroService:　HeroService,
        private route:　ActivatedRoute,
        private location: Location
    ){}
    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => {
                return this.heroService.getHero(+params['id']);
            })
            .subscribe((hero)=>{
                this.hero = hero;
            });
    }
    goBack(): void {
        this.location.back();
    }
}
