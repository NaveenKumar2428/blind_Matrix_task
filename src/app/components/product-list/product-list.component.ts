import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  mAddOrEditProduct: boolean = false;


  data_storage: any[] = [];

  cart_items: any[] = [];

  cart_data: any [] = []

  added: boolean = false;


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

    const data = localStorage.getItem('cart_data')

    console.log(localStorage.getItem('cart_data'))

    if (data !== null) {
      this.data_storage = JSON.parse(data); 
    }



  }


  addCart() {
    this.router.navigate(['add-product']);
    this.mAddOrEditProduct = true;
  }

  recivedData(newDataStorage: any) {

    const updatedDataStorage = [...this.data_storage, newDataStorage];

    this.data_storage = updatedDataStorage;

    localStorage.setItem('cart_data', JSON.stringify(this.data_storage));

    console.log("Updated data storage:", this.data_storage);
  }




  showDescription(item: any) {
    console.log(item)
    this.router.navigate([`description/${item.id}`])
  }

  addProduct(item: any) {
    item.added = true;

    var addQuantity = 
    
      {
        ...item,
        quantity: 1
      }
    

    const updatedDataStorage = [...this.cart_items, addQuantity];

    this.cart_items = updatedDataStorage;

    localStorage.setItem('added_cart_data', JSON.stringify(this.cart_items));


  }


  deleteUpdate(){

    const data = localStorage.getItem('added_cart_data')

    if (data !== null) {
      this.cart_data = JSON.parse(data);
    }


  }

  deleteProduct(item:any){
    const index = this.data_storage.indexOf(item);
    let allAddCardData = localStorage.getItem('added_cart_data') ;
    if(allAddCardData != null){
      let parsedDAta =  JSON.parse(allAddCardData)
      let removedAdd = parsedDAta.filter((val : any) => item.id !== val.id )
      localStorage.setItem('added_cart_data',JSON.stringify(removedAdd));
    }

    if (index !== -1) {
      this.data_storage.splice(index, 1);
      
      localStorage.setItem('cart_data', JSON.stringify(this.data_storage));
    }

  }


  editProduct(item:any){

    const edit_product =  this.data_storage.filter((val)=> item.id == val.id)

  }




}
