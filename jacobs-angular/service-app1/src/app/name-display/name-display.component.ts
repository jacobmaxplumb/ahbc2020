import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.css']
})
export class NameDisplayComponent implements OnInit {

  name: string;

  constructor(private nameService: NameService) { }

  ngOnInit() {
  }

  loadName() {
    this.name = this.nameService.getName();
  }

}
