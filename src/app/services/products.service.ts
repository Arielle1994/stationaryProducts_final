import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = [
    {name:"Pen"},
    {name:"Pencil"},
    {name:"Notebook"},
    {name: "Agenda"},
  
    ];
  
    constructor() { } 

    //method 
  
    getProducts(){
      return this.products;
    }

}
