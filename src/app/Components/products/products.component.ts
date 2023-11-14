import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductReadDto } from 'src/app/Dtos/ProductReadDto';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  /* constructor(public myService: ProductService) {
    this.myService.GetAllProducts().subscribe((data) => {
      this.products = data;
    });
  } */
  products: ProductReadDto[] = [];
  totalCount = 0;
  page = 1;
  countPerPage = 9;

  constructor(public myService: ProductService) {}
  ngOnInit(): void {
    this.getAllPaginationProducts(1);
  }
  getAllPaginationProducts(page: number) {
    this.myService
      .GetAllProductsInPagination(page, this.countPerPage)
      .subscribe({
        next: (data) => {
          console.log(data); 
          this.products = data.products;
          this.totalCount = data.totalCount;
          this.page = page;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
