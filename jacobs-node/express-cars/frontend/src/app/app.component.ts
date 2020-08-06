import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCars().subscribe(this.onSuccess.bind(this), this.onError.bind(this));
  }

  onSuccess(data: any) {
    console.log(data);
  }

  onError(error: Error) {
    alert(error.message);
  }
}
