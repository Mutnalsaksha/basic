// src/app/s1product/s1product.component.ts
import { Component } from '@angular/core';
import { CartService } from '../cartservices/cart.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-s1product',
  templateUrl: './s1product.component.html',
  styleUrls: ['./s1product.component.css']
})
export class S1productComponent {
  confirmPurchase: any[] = []; // Declare confirmPurchase array

  constructor(private cartService: CartService, private router: Router) {}

  addToCart(productId: string, quantity: number): void {
    this.cartService.addToCart(productId, quantity);
  }

  onClickSubmit(data: any): void {
    this.router.navigate(['/confirmation']);
    this.confirmPurchase.push(data);
    console.log(this.confirmPurchase);
  }
}
