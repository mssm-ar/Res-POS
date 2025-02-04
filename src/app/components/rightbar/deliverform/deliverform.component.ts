import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-deliverform",
  templateUrl: "./deliverform.component.html",
  styleUrls: ["./deliverform.component.css"],
})
export class DeliverformComponent implements OnInit {
  activeTab: string = "delivery";
  @Output() closeForm = new EventEmitter<void>();
  constructor(private sharedService: SharedService) {}
  customers: any[] = [];

  ngOnInit(): void {
    this.sharedService.customers$.subscribe((data) => {
      this.customers = data;
    });
  }

  onSelectBoxClick(): void {
    this.sharedService.fetchCustomers(0, 1);
  }

  // deliver form
  showDeliverForm: boolean = false;

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
