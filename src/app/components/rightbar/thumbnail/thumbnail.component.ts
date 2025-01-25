import { Component, Input } from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-thumbnail",
  templateUrl: "./thumbnail.component.html",
  styleUrls: ["./thumbnail.component.css"],
})
export class ThumbnailComponent {
  @Input() product: any;
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() stock: number = 0;
  @Input() price: number = 0;

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
}
