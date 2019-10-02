import { Component, OnInit, Input } from '@angular/core';
import { ListsService } from '../../services/lists.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() searchCriterion: string;
  public lists: any[];

  constructor(private listsService: ListsService) { }

  public ngOnInit(): void {
    this.lists = this.listsService.lists;
  }

  public removeCard(args) {
    this.listsService.removeCard(args);
  }

}
