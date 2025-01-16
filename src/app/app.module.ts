import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LeftbarComponent } from "./components/leftbar/leftbar.component";
import { RightbarComponent } from "./components/rightbar/rightbar.component";
import { FiltermenuComponent } from "./components/rightbar/filtermanu/filtermenu.component";
import { ThumbnailComponent } from "./components/rightbar/thumbnail/thumbnail.component";
import { BagComponent } from "./components/rightbar/bag/bag.component";
import { ProductComponent } from './components/rightbar/product/product.component';
import { OrderlistComponent } from './components/rightbar/product/orderlist/orderlist.component';
import { AddmodalComponent } from './components/rightbar/addmodal/addmodal.component';
import { DeliverformComponent } from './components/rightbar/deliverform/deliverform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftbarComponent,
    RightbarComponent,
    FiltermenuComponent,
    ThumbnailComponent,
    BagComponent,
    ProductComponent,
    OrderlistComponent,
    AddmodalComponent,
    DeliverformComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
