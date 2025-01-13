import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LeftbarComponent } from "./components/leftbar/leftbar.component";
import { RightbarComponent } from "./components/rightbar/rightbar.component";
import { FiltermenuComponent } from "./components/rightbar/filtermanu/filtermenu.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftbarComponent,
    RightbarComponent,
    FiltermenuComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
