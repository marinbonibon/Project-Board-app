import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/Cards';
import User from '../models/User';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements Card {

  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: User | object;

  @Input() public card: any;
  @Input() public isDoneSection: boolean;
  @Output() public removeCard = new EventEmitter<any>();

  public onRemove() {
    console.log('isDoneSection', this.isDoneSection);
    this.removeCard.emit(this.card);
  }

}
