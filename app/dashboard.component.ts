import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './types/hero';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'app/templates/dashboard.template.html'
})
export class DashboardComponent implements OnInit{
    constructor(private heroService: HeroService){
        
    }
    heroes: Hero[];
    
    ngOnInit(){
        this.heroService
          .getHeroes()
          .then((res) => {
              this.heroes = res.slice(1, 5);
          });
    }
}
