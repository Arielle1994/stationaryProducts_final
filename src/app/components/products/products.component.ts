import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  //property 

  title= "Products";
  products;

  constructor(private ProductsService: ProductsService){
    this.products= ProductsService.getProducts();
  }
}