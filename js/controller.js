import {Recipe} from './model.js';
import * as recipeViwe from './views/recipe-viwe.js';
import * as Config from './config.js';


let recipe=new Recipe();


 
async function getAllRecipes(recipeType){
    await recipe.getAllRecipe(recipeType);
    recipeViwe.loadAllRecipes(recipe.recipes);
 
    
   

};

async function getRecipeById()
{
    let id=window.location.hash.slice(1);
    let data= await recipe.getRecipiById(id);
    recipeViwe.loadRecipeById(data.data.recipe);
    
 
}
function searchRecipe(){
    result=event.target.value;
   
       
   let searchResult=recipe.filterRecipes(result);
        // console.log(searchResult);
        recipeViwe.loadSearchResult(searchResult);
 }
 function searchRecipeTypes(){
    value=event.target.value;
   
   let searchResult=recipe.filterRecipeTypes(value);
 
    recipeViwe.loadSearchTypesResult(searchResult);
 }

 function getRecpieType(){
    recipeType=event.target.innerHTML;
    console.log(recipeType);
    getAllRecipes(recipeType);
 }

(function init(){

       getAllRecipes(Config.DeafoultRecipe);
      recipeViwe.handlerHashEvent(getRecipeById);
   recipeViwe.HanlderSearchEvent(searchRecipe);
    recipeViwe.handlerCollapseList();
    recipeViwe.HanlderSearchTypesEvent(searchRecipeTypes);
    recipeViwe.HanlderSelectedTypeEvent(getRecpieType)
  

})();




