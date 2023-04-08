import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomeComponent } from './home/home.component';
 import { LoginComponent } from './login/login.component';
 import { EmployeementComponent } from './employeement/employeement.component';
 import { CheckOutComponent } from './check-out/check-out.component';
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent },
  {path: 'admin', component: AdminComponent},
  {path:'food-page', component: HomeComponent},
  {path: 'search/:searchTerm', component:HomeComponent},
  {path: 'food/:id', component:FoodPageComponent},
  {path: 'tag/:tag', component:HomeComponent},
  {path:'cart-page', component:CartPageComponent},
  {path: 'employeement', component:EmployeementComponent},
  {path: 'check-out', component:CartPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
