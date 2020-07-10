import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {

  name: string;

  constructor(private nameService: NameService) { }

  ngOnInit() {
  }

  saveName() {
    this.nameService.setName(this.name);
  }

}
