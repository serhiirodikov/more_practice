import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  e: number = Math.E;
  num: number = 0.45;
  title = 'more-practices-angular';
  search = '';
  posts: Post[] = [
    { title: 'Bear', text: 'пиво добре ' },
    { title: 'Bread', text: 'хліб добре ' },
    { title: 'Javascript', text: 'js добре ' },
  ];
}
