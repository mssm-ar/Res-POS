import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-thumbnail",
  templateUrl: "./thumbnail.component.html",
  styleUrls: ["./thumbnail.component.css"],
})
export class ThumbnailComponent {
  private totalClicks = 0;

  @Input()
  title = "Leftbar";
  @Output()
  titleClick = new EventEmitter<ThumbnailComponent>();
}
