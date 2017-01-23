import { Component } from '@angular/core';
import { Hero, HEROES } from './types/hero';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/main.html',
    styleUrls: ['styles.css']
})

export class AppComponent {
    /*主页标题*/
    title = 'Tour of heroes';
    /*英雄列表*/
    heroes = HEROES;
    /*被选中的英雄*/
    selectedHero: Hero;

    /**
     * 将当前英雄标记为选中状态
     * @param hero
     */
    onSelect = (hero: Hero) => {
        /*使用箭头函数，this指向拥有当前方法的对象*/
        this.selectedHero = hero;
    }
}
