import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'trimPip',
  pure: false,
})
export class TrimPipPipe implements PipeTransform {
  transform(
    posts: Post[],
    search: string = '',
    searchField: string = 'title'
  ): Post[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter((post) => {
      return post[searchField].toLowerCase().includes(search.toLowerCase());
    });
  }
}
