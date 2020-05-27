import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //esta propiedad permitira almacenar de manera local
  //los productos
  items = []; //array

  constructor() { }

  //el metodo addProductToCart permite agregar un producto al array
  addProductToCart(product){
    this.items.push(product);
  }

  //permitir obtener la lista de todos los
  //productos agregados
  getItems(){
    return this.items;
  }

  //Este método permitirá limpiar el carrito de compras
  clearCart(){
    this.items = [];//limpiamos o eliminamos el contenido del array
    return this.items;
  }

}
