import { Component, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-addmodal",
  templateUrl: "./addmodal.component.html",
  styleUrls: ["./addmodal.component.css"],
})
export class AddmodalComponent implements OnInit {
  thumbnailData: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.thumbnail$.subscribe((data) => {
      this.thumbnailData = data;
    });
  }

  closeModal() {
    this.sharedService.clearThumbnail();
  }
}
