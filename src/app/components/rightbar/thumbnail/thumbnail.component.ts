import { Component, Input, Output, EventEmitter } from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-thumbnail",
  templateUrl: "./thumbnail.component.html",
  styleUrls: ["./thumbnail.component.css"],
})
export class ThumbnailComponent {
  image: string = "../../../assets/img/Appse.png";
  title: string = "Appse Lam7645";
  stock: number = 1;
  price: number = 19.99;

  constructor(private sharedService: SharedService) {}

  onThumbnailClick() {
    const thumbnailData = {
      image: this.image,
      title: this.title,
      stock: this.stock,
      price: this.price,
    };
    this.sharedService.setThumbnail(thumbnailData);
  }

  // @Input()
  // @Output()
  // titleClick = new EventEmitter<ThumbnailComponent>();
}
