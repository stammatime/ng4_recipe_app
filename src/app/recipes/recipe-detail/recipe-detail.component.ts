import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from 'app/shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../../recipes/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
  private router: Router,
  private route: ActivatedRoute,
  private recipeService: RecipeService) { 
  }

  ngOnInit() {
    // only works first time route is loaded
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']; // + converts to number
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  sendToSL() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // go up a level
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
  

}
