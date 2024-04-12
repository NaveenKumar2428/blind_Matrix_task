// header.component.ts
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cart_no: number = 0;

  constructor() { }

  ngOnInit(): void {

  }
}