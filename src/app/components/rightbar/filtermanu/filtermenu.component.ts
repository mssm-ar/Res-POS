import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SharedService } from "../../../services/shared.service";

@Component({
  selector: "app-filtermenu",
  templateUrl: "./filtermenu.component.html",
  styleUrls: ["./filtermenu.component.css"],
})
export class FiltermenuComponent {
  activeFilter: string = "all";
  // categories: any[] = []; // Array to hold categories
  // errorMessage: string = ""; // Variable to hold error messages

  // constructor(private sharedService: SharedService) {}

  // ngOnInit(): void {
  //   this.fetchCategories(1); // Fetch categories for tenantId 1
  //   this.sharedService.categories$.subscribe(
  //     (data) => {
  //       this.categories = data; // Update the local categories array
  //     },
  //     (error) => {
  //       console.error("Error in subscription:", error);
  //     }
  //   );
  // }

  // fetchCategories(tenantId: number): void {
  //   this.sharedService.fetchCategories(tenantId); // Call the service to fetch categories
  // }
}
