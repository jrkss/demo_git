import { Component } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = products;
  product;
  constructor(private route: ActivatedRoute) { }

  share(){
  window.alert('El producto ha sido compartido!!');
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.product = products[+params.get('productId')];
    });
  }
}
