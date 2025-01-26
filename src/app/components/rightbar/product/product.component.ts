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

  constructor(private sharedService: SharedService) {}

  // ngOnInit() {
  //   this.sharedService.orderList$.subscribe((orders) => {
  //     this.orderList = orders; // Update order list
  //   });
  // }

  // deliver form
  showDeliverForm: boolean = false;

  onOrderClick() {
    this.showDeliverForm = true;
  }
  onCloseDeliverForm() {
    this.showDeliverForm = false;
  }
}
