import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[];

  constructor() { }

  ngOnInit() {
    this.cars = [
      {make: 'make1', model: 'model1', year: 1999},
      {make: 'make2', model: 'model2', year: 2000},
      {make: 'make3', model: 'model3', year: 2002},
    ];
  }

  deleteCar(car: Car) {
    const carIndex = this.cars.indexOf(car);
    this.cars.splice(carIndex, 1);
  }

}
