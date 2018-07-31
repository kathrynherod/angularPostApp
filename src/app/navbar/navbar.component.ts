import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  isExpanded = false;
  toggleDropdown() {
    this.isExpanded = !this.isExpanded;
    console.log(this.isExpanded);
  }
}
