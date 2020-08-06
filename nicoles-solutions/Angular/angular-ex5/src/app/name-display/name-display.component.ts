import { Component, OnInit } from "@angular/core";
import { NameService } from "../name.service";

@Component({
  selector: "app-name-display",
  templateUrl: "./name-display.component.html",
  styleUrls: ["./name-display.component.css"],
})
export class NameDisplayComponent implements OnInit {
  name1: string;
  constructor(private service: NameService) {}

  ngOnInit(): void {}
  getName() {
    this.name1 = this.service.getName();
  }
}
