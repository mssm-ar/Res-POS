import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-leftbar",
  templateUrl: "./leftbar.component.html",
  styleUrls: ["./leftbar.component.css"],
})
export class LeftbarComponent {
  activeTab: string = "home";
}
