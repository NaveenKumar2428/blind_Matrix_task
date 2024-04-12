import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


  // @Output() dataStorageUpdated: EventEmitter<any[]> = new EventEmitter<any[]>();


  @Input() editProd: any[] = [];

  @Output() dataStorageUpdated = new EventEmitter<any>();

  
  addCartData:any = [];

  data_storage: any[] = [];


  constructor(  
    private router: Router
  ) {}

  ngOnInit(): void {
   console.log(this.editProd)
  }



  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {

      this.addCartData.image = reader.result as string;

      const base64String = event.target.result;
      console.log(base64String)
    };


    reader.readAsDataURL(file);
  }


  onSubmit(){

    let productData = {
      id: this.addCartData.id,
      name: this.addCartData.name,
      price: this.addCartData.price,
      description: this.addCartData.description,
      image: this.addCartData.image,
      quantity: 0
    }
    
  if(productData !== null){
    this.dataStorageUpdated.emit(productData);
  }
    
  }


  getEditData(){

  }


}
