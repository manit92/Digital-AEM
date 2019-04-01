import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-item-display',
  templateUrl: './list-item-display.component.html',
  styleUrls: ['./list-item-display.component.css']
})
export class ListItemDisplayComponent implements OnInit {
  @Input() item: { name: string, imageValue: string};

  constructor() { }

  ngOnInit() {}

}
