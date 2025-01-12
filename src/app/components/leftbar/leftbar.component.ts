import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-leftbar",
  templateUrl: "./leftbar.component.html",
  styleUrls: ["./leftbar.component.css"],
})
export class LeftbarComponent {
  private totalClicks = 0;

  @Input()
  title = "Leftbar";
  @Output()
  titleClick = new EventEmitter<LeftbarComponent>();
}
