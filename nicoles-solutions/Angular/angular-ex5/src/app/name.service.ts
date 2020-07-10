import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NameService {
  name: string;

  constructor() {}

  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}
