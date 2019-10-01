import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Card, CardList} from '../models/Cards';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements CardList {

  id: string;
  name: string;
  cards: Card[];

  @Input() public searchCriterion: string;
  @Input() list: any;
  @Output() removeCard = new EventEmitter<any>();

  onRemove(item: any) {
    this.removeCard.emit({
      list: this.list,
      item
    });
  }
}
