import { Component, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-rightbar",
  templateUrl: "./rightbar.component.html",
  styleUrls: ["./rightbar.component.css"],
})
export class RightbarComponent implements OnInit {
  products: any[] = [];
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // this.fetchProducts(1, 1);
    this.sharedService.products$.subscribe((data) => {
      this.products = data; // Update products when data changes
    });
  }
}
