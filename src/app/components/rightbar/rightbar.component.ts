import { Component } from "@angular/core";

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
export class RightbarComponent {
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
