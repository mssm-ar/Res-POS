import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

// tumbnail data
export interface ThumbnailData {
  image: string;
  title: string;
  stock: number;
  price: number;
}

@Injectable({
  providedIn: "root",
})
export class SharedService {
  // API CALL SERVICE
  constructor(private http: HttpClient) {}

  // private apiUrl = "";  This is base url of api

  // Fetch categories from the API to display categories on filtermenu
  private categoriesSubject = new BehaviorSubject<any[]>([]);
  categories$ = this.categoriesSubject.asObservable();

  fetchCategories(tenantId: number): void {
    const url = `/api/Category/Category?tenantId=${tenantId}`;
    this.http.get<any[]>(url).subscribe(
      (data) => {
        this.categoriesSubject.next(data); // Update the state with the fetched data
      },
      (error) => {
        console.error("Error fetching categories:", error);
      }
    );
  }

  // fetch category for filter menu
  getCategories() {
    return this.http.get<any[]>("/api/Category/Category?tenantId=1");
  }

  // Fetch products from the API to display product thumbnaiul according to filtermenu
  private productsSubject = new BehaviorSubject<any[]>([]);
  products$ = this.productsSubject.asObservable(); // Observable for products

  fetchProducts(categoryId: number, tenantId: number): void {
    const url = `/api/Product/Product?category=${categoryId}&tenantId=${tenantId}`;
    this.http.get<any[]>(url).subscribe(
      (data) => {
        this.productsSubject.next(data);
      },
      (error) => {
        console.error("Error fetching products:", error);
      }
    );
  }

  // Fetch customer from the API to display customers on select menu
  private customerSubject = new BehaviorSubject<any[]>([]);
  customers$ = this.customerSubject.asObservable();

  fetchCustomers(clientId: number, tenantId: number): void {
    const url = `/api/Customer/Customer?tenantId=${tenantId}&ClientId=${clientId}`;
    this.http.get<any[]>(url).subscribe(
      (data) => {
        this.customerSubject.next(data);
      },
      (error) => {
        console.error("Error fetching customers:", error);
      }
    );
  }

  // Thumbnail Holder when i click product thumbnail
  private thumbnailHolder = new BehaviorSubject<ThumbnailData | null>(null);
  thumbnail$ = this.thumbnailHolder.asObservable();

  setThumbnail(data: ThumbnailData) {
    this.thumbnailHolder.next(data);
  }

  clearThumbnail() {
    this.thumbnailHolder.next(null);
  }

  // Method to display product detail on orderlist
  private orderListSubject = new BehaviorSubject<any[]>([]);
  orderList$ = this.orderListSubject.asObservable();

  bags: { id: number; orderList: any[]; isActive: boolean }[] = [
    { id: 1, orderList: [], isActive: true },
  ];

  addToOrderList(product: any, bagId: number) {
    const bag = this.bags.find((b) => b.id === bagId);
    if (bag) {
      bag.orderList.push(product);
      this.updateOrderList(bag.orderList); // Update the order list for the specific bag
    }
  }

  updateOrderList(orderList: any[]) {
    this.orderListSubject.next(orderList);
  }
}
