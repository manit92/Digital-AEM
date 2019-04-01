import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  items = [
    {
      name: 'First image',
      imageValue: 'digital'
    }
  ];

  /*addListItem(name: string, imageValue: string) {
    this.items.push({name: name, imageValue: imageValue});
  }*/

  constructor() { }
}
