import { Component, Input, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-thumbnail",
  templateUrl: "./thumbnail.component.html",
  styleUrls: ["./thumbnail.component.css"],
})
export class ThumbnailComponent {
  products: any[] = []; // Array to hold products

  @Input() product: any;
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() stock: number = 0;
  @Input() price: number = 0;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    // Subscribe to the products observable
    this.sharedService.products$.subscribe((data) => {
      this.products = data; // Update products array
    });
  }

  onThumbnailClick(product: any) {
    const thumbnailData = {
      image: product.urlFotoProduto,
      title: product.nome,
      stock: product.estoqueMinimo,
      price: product.precoVenda,
      description: product.descricao,
    };
    this.sharedService.setThumbnail(thumbnailData);
  }
}
