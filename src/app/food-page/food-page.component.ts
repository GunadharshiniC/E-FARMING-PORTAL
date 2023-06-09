import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { bootstrapApplication } from '@angular/platform-browser';
@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
   rating =5;
   food !: Food;
   
  constructor(private activatedRoute:ActivatedRoute, 
    private foodService: FoodService,
    private cartService: CartService,
    private router : Router ) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.food = foodService.getFoodById(params['id']);
    })
   }
  ngOnInit(): void {
   
  }
  onfavorite()
  {
    console.log("fav");
    console.log(this.food.favorite = true);
    // this.food.favorite = 
  }
  
addToCart(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page');
}

}
