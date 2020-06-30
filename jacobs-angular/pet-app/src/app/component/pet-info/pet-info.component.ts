import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet-info';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

  pet: Pet;

  constructor() { }

  ngOnInit() {
    this.pet = {
      name: 'Willy',
      breed: 'Killer Whale'
    };
  }

}
