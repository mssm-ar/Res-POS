import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-orderlist",
  templateUrl: "./orderlist.component.html",
  styleUrls: ["./orderlist.component.css"],
})
export class OrderlistComponent {
  constructor(private sharedService: SharedService) {}

  thumbnailData: any;

  ngOnInit() {
    this.sharedService.thumbnail$.subscribe((data) => {
      this.thumbnailData = data;
    });
  }
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
}
