import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  totalValue:number = 0;
  
  constructor() { 
  }
 
  cart_data: any [] = []


  value = 0;
  ngOnInit(): void {


    const data = localStorage.getItem('added_cart_data')

    if (data !== null) {
      this.cart_data = JSON.parse(data); // Assuming data is JSON stringified
    }

    this.totalPrice = this.cart_data.reduce((acc, val) => acc + val.price, 0);

  }


  totalPrice: number = this.calculateTotalPrice();

  calculateTotalPrice(): number {

    let totalPrice = 0;

    for (let i = 0; i < this.cart_data.length; i++) {
      totalPrice += this.cart_data[i].price * this.cart_data[i].quantity;
    }
    return totalPrice;
  }
  


  increaseQuantity(index: number) {
    this.cart_data[index].quantity++;
    this.totalPrice = this.calculateTotalPrice();
  }
  
  decreaseQuantity(index: number) {
    if (this.cart_data[index].quantity > 1) {
      this.cart_data[index].quantity--;
      this.totalPrice = this.calculateTotalPrice();
    }
  }
  

  calculateSingleProductPrice(index: number): number {
    return this.cart_data[index].price * this.cart_data[index].quantity;
  }
  

  removeItems(item: any) {

    const index = this.cart_data.indexOf(item);
  

    if (index !== -1) {
      this.cart_data.splice(index, 1);
      
      localStorage.setItem('added_cart_data', JSON.stringify(this.cart_data));
    }
    
  }
  




}
