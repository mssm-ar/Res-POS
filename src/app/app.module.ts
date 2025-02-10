import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LeftbarComponent } from "./components/leftbar/leftbar.component";
import { HomeComponent } from "./components/home/home.component";
import { FiltermenuComponent } from "./components/home/filtermanu/filtermenu.component";
import { ThumbnailComponent } from "./components/home/thumbnail/thumbnail.component";
import { BagComponent } from "./components/home/bag/bag.component";
import { ProductComponent } from "./components/home/product/product.component";
import { OrderlistComponent } from "./components/home/product/orderlist/orderlist.component";
import { AddmodalComponent } from "./components/home/addmodal/addmodal.component";
import { DeliverformComponent } from "./components/home/deliverform/deliverform.component";
import { SelectuserComponent } from "./components/home/deliverform/selectuser/selectuser.component";
import { SelectaddressComponent } from "./components/home/deliverform/selectaddress/selectaddress.component";
import { ConfirmComponent } from "./components/home/deliverform/confirm/confirm.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftbarComponent,
    HomeComponent,
    FiltermenuComponent,
    ThumbnailComponent,
    BagComponent,
    ProductComponent,
    OrderlistComponent,
    AddmodalComponent,
    DeliverformComponent,
    SelectuserComponent,
    SelectaddressComponent,
    ConfirmComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
