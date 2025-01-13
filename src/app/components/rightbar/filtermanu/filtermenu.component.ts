import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filtermenu",
  templateUrl: "./filtermenu.component.html",
  styleUrls: ["./filtermenu.component.css"],
})
export class FiltermenuComponent {
  private totalClicks = 0;

  @Input()
  title = "Leftbar";
  @Output()
  titleClick = new EventEmitter<FiltermenuComponent>();
}
