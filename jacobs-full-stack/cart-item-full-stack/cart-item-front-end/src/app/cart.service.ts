import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getAllCartItems(): Observable<Item[]> {
    return this.http.get<Item[]>(environment.cartItemApiEndpoint);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${environment.cartItemApiEndpoint}/${id}`);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(environment.cartItemApiEndpoint, item);
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${environment.cartItemApiEndpoint}/${item.id}`, item);
  }
}
