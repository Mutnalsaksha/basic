import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { S1productComponent } from './s1product/s1product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  
  {path:  '', component:S1productComponent},
  {path: 'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
