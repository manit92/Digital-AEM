import {Component, OnInit} from '@angular/core';
import {ListService} from '../list.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  items: { name: string, imageValue: string }[] = [];

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.items = this.listService.items;
  }

}
