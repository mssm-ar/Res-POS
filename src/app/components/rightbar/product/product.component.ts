import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { SharedService } from "../../../services/shared.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent {
  products: any[] = [];
  orderList: any[] = [];
  totalPrice: number = 0;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    // Subscribe to the order list
    this.sharedService.orderList$.subscribe((orderList) => {
      this.orderList = orderList;
      this.calculateTotalPrice();
    });
  }
  clearOrderList() {
    this.orderList = [];
    this.sharedService.clearThumbnail();
  }

  calculateTotalPrice() {
    this.totalPrice = this.orderList.reduce(
      (acc, product) => acc + product.price,
      0
    );
  }
  // deliver form
  showDeliverForm: boolean = false;

  onOrderClick() {
    this.showDeliverForm = true;
  }
  onCloseDeliverForm() {
    this.showDeliverForm = false;
  }
}
