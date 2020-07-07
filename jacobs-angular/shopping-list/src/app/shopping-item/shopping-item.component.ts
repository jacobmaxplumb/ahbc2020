import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingItem } from '../shopping-item';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  @Input() shoppingItem: ShoppingItem;
  @Output() outputItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  outputItemClicked() {
    this.outputItem.emit(this.shoppingItem);
  }

}
