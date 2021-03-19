import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';

  posts: any = [
    {
      title: 'neat Tree',
      imgUrl: 'assets/tree.jpeg',
      username: '@nature',
      content: 'Saw this awesome during my hike today.'
    },
    {
      title: 'Snowy Mountain',
      imgUrl: 'assets/mountain.jpeg',
      username: '@nature',
      content: 'I like mountains.Here is a pic.'
    },
    {
      title: 'Mountain Biking',
      imgUrl: 'assets/mountain.jpeg',
      username: '@nature',
      content: 'I love to hike on a mountain bike'
    },
    {
      title: 'Mountain Biking',
      imgUrl: 'assets/mountain.jpeg',
      username: '@nature',
      content: 'I love to hike on a mountain bike'
    }

  ]
}
