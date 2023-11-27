import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductPaginationDto } from '../Dtos/ProductPaginationDto';
import { ProductAddDto } from '../Dtos/ProductAddDto';
import { ProductReadDto } from '../Dtos/ProductReadDto';
import { ProductDetailsDto } from '../Dtos/ProductDetailsDto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly myClient: HttpClient) {}

  private readonly Base_URL = 'https://localhost:7066/api/Products/';

  GetAllProducts():Observable<ProductReadDto[]> {
    return this.myClient.get<ProductReadDto[]>(this.Base_URL);
  }

  GetAllProductsInPagination(page: number, countPerPage: number):Observable<ProductPaginationDto> {
    return this.myClient.get<ProductPaginationDto>( `https://localhost:7066/api/Products/${page}/${countPerPage}`);
  }

  GetProductById(id: number) :Observable<ProductDetailsDto>{
    return this.myClient.get<ProductDetailsDto>(this.Base_URL + id);
  }

  AddProduct(product: ProductAddDto):Observable<ProductAddDto> {
    return this.myClient.post<ProductAddDto>(this.Base_URL, product);
  }

  UpdateProduct( updatedProduct: any) {
    return this.myClient.put(this.Base_URL , updatedProduct);
  }

  DeleteProduct(id: number) {
    return this.myClient.delete(this.Base_URL+id);
  }
}
