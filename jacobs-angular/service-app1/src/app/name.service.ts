import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  private name: string;

  constructor() { }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}
