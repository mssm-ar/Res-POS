import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { SharedService } from "../../../services/shared.service";

@Component({
  selector: "app-addmodal",
  templateUrl: "./addmodal.component.html",
  styleUrls: ["./addmodal.component.css"],
})
export class AddmodalComponent implements OnInit {
  @Input() selectedBagId!: number;
  @Output() productAdded = new EventEmitter<void>();
  constructor(private sharedService: SharedService) {}

  thumbnailData: any;
  product: any;
  selectedSizeValue: number = 200;
  productId: number = 1;

  ngOnInit() {
    this.sharedService.thumbnail$.subscribe((data) => {
      this.thumbnailData = data;
    });
    this.loadProductDetails(this.productId);
  }
  // method to display detailed data of product
  loadProductDetails(productId: number): void {
    this.sharedService.getProductDetails(productId).subscribe((data) => {
      this.product = data;
      this.selectedSizeValue = this.product.listaTamanhos[0].valor; // Default to first size
    });
  }

  onSizeChange(event: any): void {
    const selectedSize = event.target.value;
    const size = this.product.listaTamanhos.find(
      (s: any) => s.tamanho.toLowerCase() === selectedSize
    );
    if (size) {
      this.selectedSizeValue = size.valor;
    }
  }

  setProductId(id: number): void {
    this.productId = id;
    this.loadProductDetails(id);
  }

  // add to orderlist
  onAddClick() {
    if (this.thumbnailData) {
      const newProduct = {
        ...this.thumbnailData,
        ordernumber: this.ordernumber,
        ingredient_number: this.ingredient_number,
      };
      this.sharedService.addToOrderList(newProduct);
    }
    this.sharedService.clearThumbnail();
    this.ordernumber = 1;
    this.ingredient_number = 1;
  }
  closeModal() {
    this.sharedService.clearThumbnail();
  }

  // order number
  ordernumber: number = 1;
  decrementorder() {
    if (this.ordernumber > 1) {
      this.ordernumber--;
    }
  }

  incrementorder() {
    this.ordernumber++;
  }

  //ingredient number
  ingredient_number: number = 1;
  decrementIngredient(complemento: any): void {
    if (complemento.qtd > 1) {
      complemento.qtd -= 1;
    }
  }

  incrementingredient(complemento: any) {
    complemento.qtd++;
  }
}
