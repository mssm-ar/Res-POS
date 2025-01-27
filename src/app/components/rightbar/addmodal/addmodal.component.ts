import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { SharedService } from "../../../services/shared.service";

@Component({
  selector: "app-addmodal",
  templateUrl: "./addmodal.component.html",
  styleUrls: ["./addmodal.component.css"],
})
export class AddmodalComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  thumbnailData: any;

  ngOnInit() {
    this.sharedService.thumbnail$.subscribe((data) => {
      this.thumbnailData = data;
    });
  }

  // add to orderlist
  onAddClick() {
    if (this.thumbnailData) {
      // Add the product to the order list
      this.sharedService.addToOrderList(this.thumbnailData);
    }
  }

  closeModal() {
    this.sharedService.clearThumbnail();
  }
  ordernumber: number = 1;
  decrementorder() {
    if (this.ordernumber > 1) {
      this.ordernumber--;
    }
  }

  incrementorder() {
    this.ordernumber++;
  }
  //ingredient number
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
