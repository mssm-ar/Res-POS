import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-bag",
  templateUrl: "./bag.component.html",
  styleUrls: ["./bag.component.css"],
})
export class BagComponent {
  @Input() bagNumber!: number;
  @Output() close = new EventEmitter<void>();

  closeBag() {
    this.close.emit(); // Notify parent to remove the bag
  }
}
