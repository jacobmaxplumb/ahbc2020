import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars = [
    {make: 'make1', model: 'model1', year: 2000},
    {make: 'make2', model: 'model2', year: 2000},
    {make: 'make3', model: 'model3', year: 2000},
  ];

  constructor() { }
}
