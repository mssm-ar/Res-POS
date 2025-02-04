import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-deliverform",
  templateUrl: "./deliverform.component.html",
  styleUrls: ["./deliverform.component.css"],
})
export class DeliverformComponent implements OnInit {
  @Output() closeForm = new EventEmitter<void>();

  constructor(private sharedService: SharedService) {}

  activeTab: string = "delivery";
  customers: any[] = [];
  addresses: any[] = [];
  paymentMethods: any[] = [];

  hasSelectedCustomer: boolean = false;
  hasSelectedPayment: boolean = false;
  selectedCustomerId: number | null = null;

  ngOnInit(): void {
    // Subscribe to customer data
    this.sharedService.customers$.subscribe((data) => {
      this.customers = data;
    });

    // Subscribe to address data
    this.sharedService.addresses$.subscribe((data) => {
      this.addresses = data;
    });

    // Subscribe to payment method data
    this.sharedService.paymentMethods$.subscribe((data) => {
      this.paymentMethods = data;
    });
  }

  // customer select method
  onCustomerSelectBoxClick(): void {
    this.sharedService.fetchCustomers(0, 1);
    this.hasSelectedCustomer = true;
  }

  // Fetch addresses when the address select box is clicked
  onAddressSelectBoxClick(): void {
    if (this.selectedCustomerId) {
      this.sharedService.fetchAddresses(this.selectedCustomerId);
    }
  }

  // Fetch addresses for the selected customer
  onCustomerSelect(customerId: number): void {
    this.selectedCustomerId = customerId;
    this.sharedService.fetchAddresses(customerId);
  }

  // payment select method
  onPaymentSelectBoxClick(): void {
    this.sharedService.fetchPaymentMethods(1);
    this.hasSelectedPayment = true;
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
