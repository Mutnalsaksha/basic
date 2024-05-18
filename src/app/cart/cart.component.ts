// src/app/cart/cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartservices/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data: any;
  cartItems: { productId: string; quantity: number }[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  updateQuantity(productId: string, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

  getItemName(productId: string): string {
    // You might fetch the actual name from your data source based on productId
    return `Product Name for ${productId}`;
  }

  getItemPrice(): number {
    // You might fetch the actual price from your data source
    return 99; // Example price
  }

  getItemTotal(item: { productId: string; quantity: number }): number {
    return item.quantity * this.getItemPrice();
  }
}
