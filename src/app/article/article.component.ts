import { Component, HostBinding, Input } from '@angular/core';
import { Article } from '../article.model';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  faarrowdown = faArrowDown;
  faarrowup = faArrowUp;
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  // article: Article;

  constructor() {
    this.article = new Article('Angular2', 'http://angular.io', 10);
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
