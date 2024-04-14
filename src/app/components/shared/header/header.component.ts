// header.component.ts
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../service/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  cartCount: number = 0;


  constructor(private cartService:CartService) {

   }

  ngOnInit(): void {
    
    this.cartService.cart_no$.subscribe(count => {
      this.cartCount = count;
    });

  }



}