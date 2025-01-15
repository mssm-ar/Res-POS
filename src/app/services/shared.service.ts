import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface ThumbnailData {
  image: string;
  title: string;
  stock: number;
  price: number;
}

@Injectable({
  providedIn: "root",
})
export class SharedService {
  private thumbnailSubject = new BehaviorSubject<ThumbnailData | null>(null);
  thumbnail$ = this.thumbnailSubject.asObservable();

  // Thumbnail Methods
  setThumbnail(data: ThumbnailData) {
    this.thumbnailSubject.next(data);
  }

  clearThumbnail() {
    this.thumbnailSubject.next(null);
  }

  // constructor() {}
}
