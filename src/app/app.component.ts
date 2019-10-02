import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project-Board-app';
  public searchCriterion: string;

  public onSearch(criterion) {
    this.searchCriterion = criterion;
  }
}
