import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent {
  showDeliverForm: boolean = false;

  onOrderClick() {
    this.showDeliverForm = true;
  }
  onCloseDeliverForm() {
    this.showDeliverForm = false;
  }
}
