import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe ("Beef Wellington","A local delicacy","https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mitarashi_dango_by_denver935.jpg/1200px-Mitarashi_dango_by_denver935.jpg", 
        [
            new Ingredient("Beef", 1),
            new Ingredient ("Wellington", 1)
        ]),
        new Recipe ("Dango","A delicious dish","http://wppullzone1.epicmatcha.netdna-cdn.com/wp-content/uploads/2016/03/matcha-cookies-hanami-dango.jpg", 
        [ 
            new Ingredient("Dough ball", 4),
            new Ingredient ("Skewer", 1)
        ])
      ];

      recipeSelected = new EventEmitter<Recipe>();

      getRecipes(){
          return this.recipes.slice(); // returns new array instead of a reference
      }

      


}