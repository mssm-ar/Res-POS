import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  @Input()
  title = "Footer";

  @Output()
  titleClick = new EventEmitter<NavbarComponent>();

  @Output() searchKeyword = new EventEmitter<string>();

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchKeyword.emit(input.value);
  }
}
