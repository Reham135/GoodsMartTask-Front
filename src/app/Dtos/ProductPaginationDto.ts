import { ProductReadDto } from "./ProductReadDto";

export interface ProductPaginationDto {
    products: ProductReadDto[];
    totalCount: number;
}