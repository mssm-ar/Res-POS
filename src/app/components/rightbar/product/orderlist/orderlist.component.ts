import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-orderlist",
  templateUrl: "./orderlist.component.html",
  styleUrls: ["./orderlist.component.css"],
})
export class OrderlistComponent {
  constructor(private sharedService: SharedService) {}

  // thumbnailData: any;
  @Input() orderList: any[] = [];

  ngOnInit() {}

  // order number
  ingredient_number: number = 1;
  decrementingredient() {
    if (this.ingredient_number > 1) {
      this.ingredient_number--;
    }
  }

  incrementingredient() {
    this.ingredient_number++;
  }
  // Method to calculate the total price for the entire order list
  getSubtotal(): number {
    return this.orderList.reduce((acc, product) => {
      return acc + product.price * product.ingredient_number; // Multiply price by quantity
    }, 0);
  }
}
