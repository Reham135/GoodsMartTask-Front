import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { ProductDetailsDto } from 'src/app/Dtos/ProductDetailsDto';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  ID = 0;
  product!: ProductDetailsDto;
  name:any;
  price:any;


  constructor(
    myRoute: ActivatedRoute,
    public myService: ProductService,
    private router: Router
  ) {
    this.ID = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.myService.GetProductById(this.ID).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (err) => {
        console.log(err);
        this.router.navigate(['**']);

      },
    });
  }

  updateProduct(name:any,price:any,id:number=this.ID) {
    let updatedProduct={name,price,id}
    this.myService.UpdateProduct(updatedProduct).subscribe({
      next: () => {
      },
      error: (err) => {
        console.log(err);

      },
    });
  }



  deleteProduct() {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
  
    if (confirmDelete) {
      this.myService.DeleteProduct(this.ID).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error:(error) => {
          console.log(error);
        }
    });
    }
  }
  
}
