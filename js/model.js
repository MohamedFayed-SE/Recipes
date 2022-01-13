import { getJson } from "./comman";
import { BaseUrl } from "./config";
import * as Comman from './comman'

export class Recipe{

    recipes;
    recipesTypes=[
        'carrot','broccoli','asparagus','cauliflower','corn','corn','cucumber','green pepper', 
        'lettuce','mushrooms','onion','potato','pumpkin','red pepper','tomato','beetroot',
        'brussel sprouts','peas','radish','sweet potato','leek','cabbage','celery','chili',
        'garlic','basil','coriander','parsley','rosemary','oregano','cinnamon','saffron','green bean       ',
        ,'bean','chickpea','apple','avocado','banana','blackberry','blackcurrant','blueberry'
    ];


async getAllRecipe(recipeName){
        try{
          const  url=`${BaseUrl}?search=${recipeName}`
        let  data=await getJson(url);
            this.recipes=data.data.recipes;
            console.log(data);
            return data;
            

        }catch(error)
            {
                throw error;
            }
    }


async getRecipiById(id){
    try{
        const url=`${BaseUrl}/${id}`;

        let data=await getJson(url);

        return data;


    }catch(err){
        throw err;
    }
}
filterRecipes(query)
{
    return Comman.filter(this.recipes,query);
}
filterRecipeTypes(query){
return Comman.filter(this.recipesTypes,query) ;
}



}