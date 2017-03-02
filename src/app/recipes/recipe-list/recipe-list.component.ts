import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Bazen','very spicy', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Eating_Asida.JPG/330px-Eating_Asida.JPG',[]),
  new Recipe('Mbakbak', 'Deliciouse', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLytuvgn0UyAaEdlrhvFhhknxxSxiRxsnm5cY5GrWTQhzJhcC',[])

];
@Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
onSelected(recipe: Recipe){
this.recipeSelected.emit(recipe);
}
}
