import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";

@Component({
  selector: "app-dumps",
  templateUrl: "./dumps.component.html",
  styleUrls: ["dumps.component.css"]
})
export class DumpsComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Dumps');
  }

}
