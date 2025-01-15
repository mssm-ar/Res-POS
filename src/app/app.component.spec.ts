import { TestBed, waitForAsync } from "@angular/core/testing";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LeftbarComponent } from "./components/leftbar/leftbar.component";
import { RightbarComponent } from "./components/rightbar/rightbar.component";
import { FiltermenuComponent } from "./components/rightbar/filtermanu/filtermenu.component";
import { ThumbnailComponent } from "./components/rightbar/thumbnail/thumbnail.component";
import { BagComponent } from "./components/rightbar/bag/bag.component";
import { OrderlistComponent } from "./components/rightbar/product/orderlist/orderlist.component";
import { AddmodalComponent } from "./components/rightbar/addmodal/addmodal.component";

describe("AppComponent", () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        LeftbarComponent,
        RightbarComponent,
        FiltermenuComponent,
        ThumbnailComponent,
        BagComponent,
        OrderlistComponent,
        AddmodalComponent,
      ],
    }).compileComponents();
  }));

  it("should create the app", waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("app");
  }));
});
