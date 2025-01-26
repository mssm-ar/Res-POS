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

  // private apiUrl = "";
  private categoriesSubject = new BehaviorSubject<any[]>([]);
  categories$ = this.categoriesSubject.asObservable();

  // Fetch categories from the API
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

  // Fetch products from the API
  private productsSubject = new BehaviorSubject<any[]>([]);
  products$ = this.productsSubject.asObservable(); // Observable for products

  fetchProducts(categoryId: number, tenantId: number): void {
    const url = `/api/Product/Product?category=${categoryId}&tenantId=${tenantId}`;
    this.http.get<any[]>(url).subscribe(
      (data) => {
        this.productsSubject.next(data); // Emit the fetched data
      },
      (error) => {
        console.error("Error fetching products:", error);
      }
    );
  }

  getCategories() {
    // Method to fetch categories (assuming it's implemented)
    return this.http.get<any[]>("/api/Category/Category?tenantId=1"); // Replace with actual URL
  }

  // Thumbnail Methods
  private thumbnailHolder = new BehaviorSubject<ThumbnailData | null>(null);
  thumbnail$ = this.thumbnailHolder.asObservable();

  setThumbnail(data: ThumbnailData) {
    this.thumbnailHolder.next(data);
  }

  clearThumbnail() {
    this.thumbnailHolder.next(null);
  }

  // Orderlist method
  // private orderListSubject = new BehaviorSubject<any[]>([]);
  // orderList$ = this.orderListSubject.asObservable();

  // addToOrderList(product: any) {
  //   const currentOrders = this.orderListSubject.value;
  //   this.orderListSubject.next([...currentOrders, product]); // Add new product to the order list
  // }
}
