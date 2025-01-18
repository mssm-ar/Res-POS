import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-deliverform",
  templateUrl: "./deliverform.component.html",
  styleUrls: ["./deliverform.component.css"],
})
export class DeliverformComponent {
  showDeliverForm: boolean = false;

  @Output() closeForm = new EventEmitter<void>();

  onCloseDeliver() {
    this.closeForm.emit();
  }

  showSelectUser: boolean = false;

  onSelectUserClick() {
    this.showSelectUser = true;
  }
  onCloseSelectUser() {
    this.showSelectUser = false;
  }

  showSelectAddress: boolean = false;

  onSelectAddressClick() {
    this.showSelectAddress = true;
  }
  onCloseSelectAddress() {
    this.showSelectAddress = false;
  }
}
