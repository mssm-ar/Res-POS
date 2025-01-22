import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// tumbnail data
interface ThumbnailData {
  image: string;
  title: string;
  stock: number;
  price: number;
}
// add order data
export interface AddOrder {
  price: number;
  orderTitle: string;
}

@Injectable({
  providedIn: "root",
})
export class SharedService {
  // Thumbnail Methods
  private thumbnailSubject = new BehaviorSubject<ThumbnailData | null>(null);
  thumbnail$ = this.thumbnailSubject.asObservable();

  setThumbnail(data: ThumbnailData) {
    this.thumbnailSubject.next(data);
  }

  clearThumbnail() {
    this.thumbnailSubject.next(null);
  }

  // add order data method
  private orderData = new BehaviorSubject<AddOrder | null>(null);

  setOrderData(price: number, orderTitle: string) {
    this.orderData.next({ price, orderTitle });
  }

  getOrderData() {
    return this.orderData.asObservable();
  }
}
