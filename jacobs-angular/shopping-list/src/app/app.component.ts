import { Component } from '@angular/core';
import { ShoppingItem } from './shopping-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentItem: ShoppingItem;

  shoppingItems: ShoppingItem[] = [
    {name: 'bananas', price: 1.00},
    {name: 'ice cream', price: 2.00},
    {name: 'candy', price: 1.50},
  ];

  changeShoppingItem(e) {
    this.currentItem = e;
    console.log(e);
  }
}
