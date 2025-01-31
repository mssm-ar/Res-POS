import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-orderlist",
  templateUrl: "./orderlist.component.html",
  styleUrls: ["./orderlist.component.css"],
})
export class OrderlistComponent {
  @Input() orderList: any[] = [];
  @Output() orderListChange = new EventEmitter<any[]>();

  constructor() {}

  ngOnInit() {}

  // order number
  ingredient_number: number = 1;
  decrementingredient(product: any) {
    if (product.ingredient_number > 1) {
      product.ingredient_number--;
      this.emitUpdatedOrderList();
    }
  }

  incrementingredient(product: any) {
    product.ingredient_number++;
    this.emitUpdatedOrderList();
  }

  emitUpdatedOrderList() {
    this.orderListChange.emit(this.orderList);
    console.log(this.ingredient_number);
  }
  // Method to calculate the total price for the entire order list
}
