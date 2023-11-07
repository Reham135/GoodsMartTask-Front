import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { AddProductComponent } from './Components/add-product/add-product.component';

const routes: Routes = [
{path:"",component:ProductsComponent},
{path:"Products",component:ProductsComponent},
{path:"Products/:id",component:ProductDetailsComponent},
{path:"Add",component:AddProductComponent},
{path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
