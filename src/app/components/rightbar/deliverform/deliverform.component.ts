import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-deliverform",
  templateUrl: "./deliverform.component.html",
  styleUrls: ["./deliverform.component.css"],
})
export class DeliverformComponent {
  showDeliverForm: boolean = false;

  onOrderClick() {
    this.showDeliverForm = true;
  }
  @Output() closeForm = new EventEmitter<void>();

  onCloseDeliver() {
    this.closeForm.emit();
  }
}
