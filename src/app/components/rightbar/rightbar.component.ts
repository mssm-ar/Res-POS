import { Component, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";

interface Thumbnail {
  image: string;
  title: string;
  stock: number;
  price: number;
}

@Component({
  selector: "app-rightbar",
  templateUrl: "./rightbar.component.html",
  styleUrls: ["./rightbar.component.css"],
})
export class RightbarComponent implements OnInit {
  products: any[] = [];
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // this.fetchProducts(1, 1);
    this.sharedService.products$.subscribe((data) => {
      this.products = data; // Update products when data changes
    });
  }

  thumbnails: Thumbnail[] = [
    {
      image: "../../../assets/img/Appse.png",
      title: "Appse Lam7645",
      stock: 1,
      price: 9.09,
    },
    {
      image: "../../../assets/img/Spagetti.png",
      title: "Spagetti Bolognese",
      stock: 0,
      price: 23.23,
    },
    {
      image: "../../../assets/img/Golden Brief.png",
      title: "Golden Brief",
      stock: 199918,
      price: 18.18,
    },
    {
      image: "../../../assets/img/Ratatueli.png",
      title: "Ratatueli",
      stock: 9945,
      price: 2.02,
    },
    {
      image: "../../../assets/img/Ratatue.png",
      title: "Ratatue",
      stock: 99921,
      price: 18.18,
    },
    {
      image: "../../../assets/img/Franceny.png",
      title: "Franceny",
      stock: 99871,
      price: 18.18,
    },
    {
      image: "../../../assets/img/Watering meal.png",
      title: "Watering meals",
      stock: 9831,
      price: 115.13,
    },
    // repeat
    {
      image: "../../../assets/img/Appse.png",
      title: "Appse Lam7645",
      stock: 1,
      price: 9.09,
    },
    {
      image: "../../../assets/img/Spagetti.png",
      title: "Spagetti Bolognese",
      stock: 0,
      price: 23.23,
    },
    {
      image: "../../../assets/img/Golden Brief.png",
      title: "Golden Brief",
      stock: 199918,
      price: 18.18,
    },
    {
      image: "../../../assets/img/Ratatueli.png",
      title: "Ratatueli",
      stock: 9945,
      price: 2.02,
    },
    {
      image: "../../../assets/img/Ratatue.png",
      title: "Ratatue",
      stock: 99921,
      price: 18.18,
    },
    {
      image: "../../../assets/img/Franceny.png",
      title: "Franceny",
      stock: 99871,
      price: 18.18,
    },
    {
      image: "../../../assets/img/Watering meal.png",
      title: "Watering meals",
      stock: 9831,
      price: 115.13,
    },
  ];
}
