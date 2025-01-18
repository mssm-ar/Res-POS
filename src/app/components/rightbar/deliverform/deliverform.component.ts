import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-deliverform",
  templateUrl: "./deliverform.component.html",
  styleUrls: ["./deliverform.component.css"],
})
export class DeliverformComponent {
  activeTab: string = "delivery";
  // deliver form
  showDeliverForm: boolean = false;

  @Output() closeForm = new EventEmitter<void>();

  onCloseDeliver() {
    this.closeForm.emit();
  }
  // select user form
  showSelectUser: boolean = false;

  onSelectUserClick() {
    this.showSelectUser = true;
  }
  onCloseSelectUser() {
    this.showSelectUser = false;
  }
  // select address form
  showSelectAddress: boolean = false;

  onSelectAddressClick() {
    this.showSelectAddress = true;
  }
  onCloseSelectAddress() {
    this.showSelectAddress = false;
  }
  // place order
  showConfirmComponent: boolean = false;

  onPlaceOrder() {
    this.showConfirmComponent = true;
  }
}
