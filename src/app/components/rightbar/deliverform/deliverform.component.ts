import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  HostListener,
} from "@angular/core";
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

  subtotal: number = 0;
  tax: number = 0;
  serviceFee: number = 0;

  customers: any[] = [];
  addresses: any[] = [];
  paymentMethods: any[] = [];

  hasSelectedCustomer: boolean = false;
  hasSelectedPayment: boolean = false;
  selectedCustomerId: number | null = null;

  ngOnInit(): void {
    // Subscribe to price data
    this.sharedService.subtotal$.subscribe((data) => {
      this.subtotal = data;
    });

    this.sharedService.tax$.subscribe((data) => {
      this.tax = data;
    });

    this.sharedService.serviceFee$.subscribe((data) => {
      this.serviceFee = data;
    });

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

  handleNewCustomer(customerData: any) {
    this.sharedService.createCustomer(customerData);
    this.onCloseSelectUser(); // Close the form after saving
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

  //Calculator effect here
  inputValue: string = "0";

  appendToInput(value: string) {
    if (this.inputValue === "0") {
      this.inputValue = value; // Replace zero if it's the current value
    } else {
      this.inputValue += value; // Append the value to the existing input
    }
  }

  // Method to handle backspace
  backspace() {
    this.inputValue = this.inputValue.slice(0, -1) || "0"; // Remove last character or set to zero
  }

  // Method to handle OK button click
  confirm() {
    // Add your logic for what happens when OK is clicked
    console.log("Confirmed value:", this.inputValue);
  }

  // Method to handle dot button click
  appendDot() {
    if (!this.inputValue.includes(".")) {
      this.inputValue += "."; // Append dot if not already present
    }
  }

  // Listen for keyboard events
  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;

    // Check if the key is a number or specific keys
    if ("0123456789".includes(key)) {
      this.appendToInput(key);
    } else if (key === "Backspace") {
      this.backspace();
    } else if (key === ".") {
      this.appendDot();
    } else if (key === "Enter") {
      this.confirm();
    }
  }
}
