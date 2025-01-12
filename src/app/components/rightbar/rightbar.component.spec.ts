import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { RightbarComponent } from "./rightbar.component";

describe("FooterComponent", () => {
  let component: RightbarComponent;
  let fixture: ComponentFixture<RightbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RightbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
