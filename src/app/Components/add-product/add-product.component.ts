import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(public myService: ProductService, private router: Router) {}

name:string="";
price:number=0;
expiryDate=new Date;
Add() {
  if (this.name.length>=5&&this.name.length<=50&& this.price >= 0 && this.price <= 1000000 ) {
    console.log("if succeeded")
    let newProduct = { name: this.name, price: this.price, expiryDate: this.expiryDate };
    console.log(newProduct)
    this.myService.AddProduct(newProduct).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
} }

  










/*
  Add(name: any, price: any, expiryDate: any) {
    if (name && price&& expiryDate) {
    let newProduct = { name, price, expiryDate };
    this.myService.AddProduct(newProduct).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }}
  
} */