import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Item } from "../interfaces/item";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"],
})
export class ItemsComponent implements OnInit {
  cartItems: Item[] = [];
  showIndex: number;
  showPopup: boolean = false;
  constructor(private service: CartService) {}

  ngOnInit(): void {
    this.getAllItems();
  }
  getAllItems() {
    this.service.getAllItems().subscribe((response) => {
      console.log(response);
      this.cartItems = response;
    });
  }
  deleteItem(id: number) {
    this.service.deleteItem(id).subscribe((response) => {
      this.getAllItems();
    });
  }
  addItem(item: Item) {
    this.service.addItem(item).subscribe((response) => {
      this.getAllItems();
    });
    this.togglePopup();
  }
  updateItem(id: number, item: Item, form: NgForm) {
    let updatedItem = item;
    updatedItem.quantity = form.value.quantity;
    this.service.updateItem(id, updatedItem).subscribe((response) => {
      this.getAllItems();
    });
  }
  setIndex(index: number) {
    if (this.showIndex === index) {
      this.showIndex = null;
    } else {
      this.showIndex = index;
    }
  }
  togglePopup() {
    this.showPopup = !this.showPopup;
  }
}
