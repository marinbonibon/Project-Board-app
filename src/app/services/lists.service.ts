import {Injectable} from '@angular/core';
import User from '../components/models/User';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  public readonly user = {
    id: '1',
    firstName: 'Maryna',
    lastName: 'Petrenko',
  };

  public readonly lists = [
    {
      id: '1',
      name: 'Backlog',
      cards: [
        {
          name: 'Task 1',
          description: 'Description 1',
          dueDate: new Date('02 October 2019').toDateString(),
          assignee: this.user,
        },
        {
          name: 'Task 2',
          description: 'Description 2',
          dueDate: new Date('02 October 2019').toDateString(),
          assignee: this.user,
        },
        {
          name: 'Task 3',
          description: 'Description 3',
          dueDate: new Date('02 October 2019').toDateString(),
          assignee: this.user,
        },
      ]
    },
    {
      id: '2',
      name: 'In progress',
      cards: [
        {
          name: 'Task 4',
          description: 'Description 4',
          dueDate: new Date('02 October 2019').toDateString(),
          assignee: this.user,
        },
        {
          name: 'Task 5',
          description: 'Description 5',
          dueDate: new Date('02 October 2019').toDateString(),
          assignee: this.user,
        },
        {
          name: 'Task 6',
          description: 'Description 6',
          dueDate: new Date('02 October 2019').toDateString(),
          assignee: this.user,
        },
      ]
    },
    {
      id: '3',
      name: 'Done',
      cards: [
        {
          name: 'Task 7',
          description: 'Description 7',
          dueDate: new Date('02 October 2019').toDateString(),
          assignee: this.user,
        },
        {
          name: 'Task 8',
          description: 'Description 8',
          dueDate: new Date('02 October 2019').toDateString(),
          assignee: this.user,
        },
        {
          name: 'Task 9',
          description: 'Description 9',
          dueDate: new Date('02 October 2019').toDateString(),
          assignee: this.user,
        },
      ]
    },
  ];

  public removeCard({list, item}) {
    const cards = list.cards;
    const index = cards.findIndex(existingCard => existingCard.name === item.name);
    cards.splice(index, 1);
  }
}
