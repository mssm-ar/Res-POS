import { Component, Input, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-thumbnail",
  templateUrl: "./thumbnail.component.html",
  styleUrls: ["./thumbnail.component.css"],
})
export class ThumbnailComponent {
  products: any[] = [];

  @Input() product: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.products$.subscribe((data) => {
      this.products = data;
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
