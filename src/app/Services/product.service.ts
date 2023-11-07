import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductReadDto } from '../Components/Dtos/ProductReadDto';
import { ProductPaginationDto } from '../Components/Dtos/ProductPaginationDto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly myClient: HttpClient) {}

  private readonly Base_URL = 'https://localhost:7066/api/Products/';

  GetAllProducts() {
    return this.myClient.get(this.Base_URL);
  }

  GetAllProductsInPagination(page: number, countPerPage: number):Observable<ProductPaginationDto> {
    return this.myClient.get<ProductPaginationDto>( `https://localhost:7066/api/Products/${page}/${countPerPage}`);
  }

  GetProductById(id: number) {
    return this.myClient.get(this.Base_URL + id);
  }

  AddProduct(product: any) {
    return this.myClient.post(this.Base_URL, product);
  }

  UpdateProduct( updatedProduct: any) {
    return this.myClient.put(this.Base_URL , updatedProduct);
  }

  DeleteProduct(id: number) {
    return this.myClient.delete(this.Base_URL+id);
  }
}
