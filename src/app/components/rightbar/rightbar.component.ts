import { Component, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-rightbar",
  templateUrl: "./rightbar.component.html",
  styleUrls: ["./rightbar.component.css"],
  animations: [
    trigger("dropAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(-20px)" }),
        animate(
          "300ms ease-out",
          style({ opacity: 1, transform: "translateY(0)" })
        ),
      ]),
    ]),
  ],
})
export class RightbarComponent implements OnInit {
  constructor(private sharedService: SharedService) {}
  products: any[] = [];
  bags: { id: number; orderList: any[]; isActive: boolean }[] = [
    { id: 1, orderList: [], isActive: true },
  ];
  selectedBagId: number = 1;

  // Method to add a new bag
  addBag() {
    const newBagId = this.bags.length + 1;
    this.bags.push({ id: newBagId, orderList: [], isActive: false });
  }

  // Method to remove a bag
  removeBag(index: number) {
    if (this.bags.length > 1) {
      this.bags.splice(index, 1);
      this.updateBagNumbers();
    }
  }

  // Update bag numbers after removal
  updateBagNumbers() {
    this.bags = this.bags.map((_, index) => ({ ..._, id: index + 1 }));
  }

  // Activate the selected bag and deactivate others
  selectBag(index: number) {
    this.bags.forEach((bag, i) => (bag.isActive = i + 1 === index));
  }
  ngOnInit(): void {
    this.sharedService.products$.subscribe((data) => {
      this.products = data;
    });
  }
  getActiveBag() {
    return this.bags.find((bag) => bag.isActive);
  }
}
