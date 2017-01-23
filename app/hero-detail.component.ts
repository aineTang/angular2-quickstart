import {Component, Input} from '@angular/core';
import { Hero } from './types/hero'

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/templates/hero-detail.template.html',
    styleUrls: ['./styles.css']
})

export class HeroDetailComponent{
    @Input() hero : Hero;
}
