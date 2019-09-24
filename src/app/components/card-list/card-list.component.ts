import { Component, OnInit } from '@angular/core';
import { Card, CardList } from '../models/Cards';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, CardList {

  id: string;
  name: string;
  cards: Card[];

  constructor() { }

  ngOnInit() {
  }

}
