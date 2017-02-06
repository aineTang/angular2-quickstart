import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service'
import { Hero } from './types/hero';

@Component({
    selector: 'my-dashboard',
    templateUrl:　'app/templates/dashboard.template.html',
    styleUrls: ['styles.css']
})

export class DashboardComponent implements OnInit{
    constructor(private heroService: HeroService){
        
    }
    heroes: Hero[];
    ngOnInit(){
        this.heroService
          .getHeroes()
          .then((res)=>{
              this.heroes = res.slice(1, 5);
          })
    }
}
