import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

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
  private apiUrl = "'https://fyhubproapi.azurewebsites.net'";
  private categoriesSubject = new BehaviorSubject<any[]>([]);
  categories$ = this.categoriesSubject.asObservable();

  // constructor(private http: HttpClient) {}

  // Fetch categories from the API
  // fetchCategories(tenantId: number): void {
  //   const url = `${this.apiUrl}/api/Category/Category?tenantId=${tenantId}`;
  //   this.http.get<any[]>(url).subscribe(
  //     (data) => {
  //       this.categoriesSubject.next(data);
  //     },
  //     (error) => {
  //       console.error("Error fetching categories:", error);
  //     }
  //   );
  // }

  // STATE MANAGEMENT SERVICE
  // Thumbnail Methods
  private thumbnailHolder = new BehaviorSubject<ThumbnailData | null>(null);
  thumbnail$ = this.thumbnailHolder.asObservable();

  setThumbnail(data: ThumbnailData) {
    this.thumbnailHolder.next(data);
  }

  clearThumbnail() {
    this.thumbnailHolder.next(null);
  }
}
