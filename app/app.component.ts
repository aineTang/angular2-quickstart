import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello, {{name}}</h1>`
})

export class AppComponent {
    name = 'This is a Angular2 greeting'
}
