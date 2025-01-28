import { Component, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-rightbar",
  templateUrl: "./rightbar.component.html",
  styleUrls: ["./rightbar.component.css"],
})
export class RightbarComponent implements OnInit {
  constructor(private sharedService: SharedService) {}
  products: any[] = [];
  bags: number[] = [1];

  // Method to add a new bag
  addBag() {
    this.bags.push(this.bags.length + 1);
  }
  removeBag(index: number) {
    if (this.bags.length > 1) {
      this.bags.splice(index, 1);
      this.updateBagNumbers();
    }
  }
  updateBagNumbers() {
    this.bags = this.bags.map((_, index) => index + 1);
  }

  ngOnInit(): void {
    this.sharedService.products$.subscribe((data) => {
      this.products = data;
    });
  }
}
