import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Components/products/products.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [        /*all created components should be imported here*/
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    ErrorComponent,
    AddProductComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,      
    FormsModule,          /* for 2 way binding */
    HttpClientModule,     /*for service dependecy injection*/
    RouterModule,         /*for routing */
    NgxPaginationModule, BrowserAnimationsModule   /*for pagination*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
