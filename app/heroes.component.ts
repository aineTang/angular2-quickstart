import { Component, OnInit } from '@angular/core';

import { Hero } from './types/hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/templates/heroes.template.html',
    styleUrls: ['styles.css']
})

export class HeroesComponent implements OnInit{
    constructor(private heroService: HeroService){
    }
    /*英雄列表*/
    heroes: Hero[];
    /*被选中的英雄*/
    selectedHero: Hero;
    
    ngOnInit(){
        this.getHeroes();
    }

    /**
     * 将当前英雄标记为选中状态
     * @param hero
     */
    onSelect = (hero: Hero) => {
        /*使用箭头函数，this指向拥有当前方法的对象*/
        this.selectedHero = hero;
    };
    getHeroes = () => {
        this.heroService
            .getHeroes()
            .then((res) => {
                console.log(res);
                this.heroes = res;
            });
    }
}
