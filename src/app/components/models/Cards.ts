import User from './User';

export interface Card {
  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: User | object;
}

export interface CardList {
  id: string;
  name: string;
  cards: Card[];
  isDoneSection: boolean;
}
