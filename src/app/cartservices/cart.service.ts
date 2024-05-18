// src/app/cartservices/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<{ productId: string; quantity: number }[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(productId: string, quantity: number): void {
    const currentCartItems = this.cartItemsSubject.value;
    const existingItem = currentCartItems.find((item) => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentCartItems.push({ productId, quantity });
    }

    this.cartItemsSubject.next([...currentCartItems]);
  }

  updateQuantity(productId: string, quantity: number): void {
    const currentCartItems = this.cartItemsSubject.value;
    const updatedItems = currentCartItems.map(item => {
      if (item.productId === productId) {
        item.quantity = quantity;
      }
      return item;
    });

    this.cartItemsSubject.next([...updatedItems]);
  }

  getCartItems(): { productId: string; quantity: number }[] {
    return this.cartItemsSubject.value;
  }
}
