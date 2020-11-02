import { Component } from '@angular/core';
import { Observable } from 'rxjs';

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
  title = 'more-practices-angular';
  searchField = 'title';
  search = '';
  posts: Post[] = [
    { title: 'Bear', text: 'пиво добре ' },
    { title: 'Bread', text: 'хліб добре ' },
    { title: 'Javascript', text: 'js добре ' },
  ];

  myDate$: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  addPost() {
    this.posts.unshift({ title: 'Angular', text: 'new post' });
  }
}
