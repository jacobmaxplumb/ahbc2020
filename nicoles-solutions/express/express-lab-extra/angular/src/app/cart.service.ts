import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Item } from "./interfaces/item";

@Injectable({
  providedIn: "root"
})
export class CartService {
  baseUrl: string = "http://localhost:3000/cart-items";
  constructor(private http: HttpClient) {}

  getAllItems(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  addItem(item: Item): Observable<any> {
    return this.http.post(this.baseUrl, item);
  }
  updateItem(id: number, item: Item): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, item);
  }
}
