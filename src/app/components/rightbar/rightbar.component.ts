import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-rightbar",
  templateUrl: "./rightbar.component.html",
  styleUrls: ["./rightbar.component.css"],
})
export class RightbarComponent {
  private totalClicks = 0;

  @Input()
  title = "Leftbar";
  @Output()
  titleClick = new EventEmitter<RightbarComponent>();
}
