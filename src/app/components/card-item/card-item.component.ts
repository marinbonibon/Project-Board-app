import { Component, OnInit } from '@angular/core';
import { Card } from '../models/Cards';
import User from '../models/User';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit, Card {

  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: User;

  constructor() { }

  ngOnInit() {
  }

}
