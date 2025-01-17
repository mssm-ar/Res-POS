import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-selectuser",
  templateUrl: "./selectuser.component.html",
  styleUrls: ["./selectuser.component.css"],
})
export class SelectuserComponent {
  @Output() closeUser = new EventEmitter<void>();

  onCloseSelect() {
    this.closeUser.emit();
  }
}
