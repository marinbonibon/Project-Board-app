import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

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
