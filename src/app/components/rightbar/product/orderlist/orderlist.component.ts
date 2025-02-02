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

  // order number
  ordernumber: number = 1;
  decrementorder(product: any) {
    if (product.ordernumber > 1) {
      product.ordernumber--;
    } else {
      this.orderList = this.orderList.filter((item) => item !== product);
    }
    this.emitUpdatedOrderList();
  }

  incrementorder(product: any) {
    product.ordernumber++;
    this.emitUpdatedOrderList();
  }

  emitUpdatedOrderList() {
    this.orderListChange.emit(this.orderList);
    console.log(this.ordernumber);
  }
}
