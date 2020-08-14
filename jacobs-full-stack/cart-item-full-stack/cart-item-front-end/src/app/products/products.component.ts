import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Item[];
  selectedProduct: Item;
  editItem: boolean;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.editItem = false;
    this.selectedProduct = {
      product: '',
      price: 0,
      id: 0,
      quantity: 0
    };
    this.cartService.getAllCartItems().subscribe(
      this.onGetAllCartItemsSuccess.bind(this),
      this.onGetAllCartItemsError.bind(this)
      );
  }

  onGetAllCartItemsSuccess(items: Item[]): void {
    this.products = items;
  }

  onGetAllCartItemsError(error: Error): void {
    alert(error.message);
  }

  deleteItem(id: number): void {
    this.cartService.deleteItem(id).subscribe(() => {
      alert(`you deleted the product with id ${id}`);
      this.cartService.getAllCartItems().subscribe(
        this.onGetAllCartItemsSuccess.bind(this),
        this.onGetAllCartItemsError.bind(this)
      );
    }, (error: Error) => {
      alert(error.message);
    });
  }

  productFormSubmitted(item: Item): void {
    console.log(item);
    this.cartService.addItem(item).subscribe(() => {
      alert('you added an item');
      this.cartService.getAllCartItems().subscribe(
        this.onGetAllCartItemsSuccess.bind(this),
        this.onGetAllCartItemsError.bind(this)
      );
    }, (error: Error) => {
      alert(error.message);
    });
  }

  updateFormSubmitted(e) {
    console.log(this.selectedProduct);
    this.cartService.updateItem(this.selectedProduct).subscribe(data => {
      alert(data);
      this.cartService.getAllCartItems().subscribe(
        this.onGetAllCartItemsSuccess.bind(this),
        this.onGetAllCartItemsError.bind(this)
      );
    }, (error: Error) => {
      alert(error.message);
    })
  }

  itemClicked(item: Item) {
    this.editItem = true;
    this.selectedProduct = item;
  }
}
