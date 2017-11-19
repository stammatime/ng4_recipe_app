import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe ("Beef Wellington","A local delicacy","https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mitarashi_dango_by_denver935.jpg/1200px-Mitarashi_dango_by_denver935.jpg"),
        new Recipe ("Dango","A delicious dish","http://wppullzone1.epicmatcha.netdna-cdn.com/wp-content/uploads/2016/03/matcha-cookies-hanami-dango.jpg")
      ];

      recipeSelected = new EventEmitter<Recipe>();

      getRecipes(){
          return this.recipes.slice(); // returns new array instead of a reference
      }

      


}