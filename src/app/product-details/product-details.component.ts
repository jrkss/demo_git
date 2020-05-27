import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }
  addToCart(product){
    this.cartService.addProductToCart(product);
    window.alert("Tu producto ha sido agregado al carrito de compras!!")
  }
  ngOnInit(): void {
  }

}
