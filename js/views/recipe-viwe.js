import * as Comman from "../comman";
const recipeListSelector=document.querySelector('.recipe-list');
const  listItem=document.querySelector('.list-item');
const detailsContainerSelector=document.querySelector('.details-container')
const recipeDetailsSelector=document.querySelector('.recipe-details');
const ingredientsSelector=document.querySelector('.ingredient');
const searchInput=document.getElementById('searchInput');
const searchList=document.querySelector('.search-list');
const  collapseIconSelector=document.querySelector('.collapse-icon');
export const  InputsearchForRecipesType=document.getElementById('InputsearchForRecipesType');
export const types=document.querySelector('.types');



function activeLink() {
    id=window.location.hash.slice(1);
    $('.recipe').siblings().removeClass('active');
    $(`#${id}`).addClass('active');

    recipeListSelector.style.width='0';
    detailsContainerSelector.style.marginLeft="0";
   
};

export function handlerCollapseList(){
    collapseIconSelector.addEventListener('click',()=>{
       
        if(recipeListSelector.style.width=='0px')
            {
                recipeListSelector.style.width='400px';
                detailsContainerSelector.style.marginLeft="400px";
            }
            else
                {
                    recipeListSelector.style.width='0';
                    detailsContainerSelector.style.marginLeft="0";
                }
        // recipeListSelector.classList.toggle('recipe-list-collapse');
        // detailsContainerSelector.classList.toggle('collapse-margin');
        // console.log("HIiiiiiiiiiii");

    });
};



export function loadAllRecipes(data){
    listItem.innerHTML='';
  let recipes=data.map(recipe=>{
           return {
               id:recipe.id,
               imageUrl:recipe.image_url,
               publisher:recipe.publisher,
               title:recipe.title.split(' ').slice(0,3).join(' ')+'.....'
           };
      
    });
    recipes.forEach(recipe => {
        let html=` <div class="recipe  pt-4" id="${recipe.id}">
        <a href="#${recipe.id}" >
            <ul class="">
              <li>
                  <div>
                   <img src="${recipe.imageUrl}"  alt="${recipe.title}">

                  </div>
               
               </li>
              <li class="recipe-info">
               <h2>${recipe.title}</h2>
                  <h2 class=""> ${recipe.publisher}</h2>
               </li>
            
                   
            </ul>

        </a>
       </div>`

       listItem.insertAdjacentHTML("beforeend",html);
    });
}

export function loadRecipeById(recipe) {
   Comman.clearHtml(recipeDetailsSelector);
    let recipeInfo=`
    <div class="recipe-img">
    <img src="${recipe.image_url}"  alt="">
        </div>
    <div class="recipe-time">
    <div class="list-style
    list-style">
      <ul class="">
          <li><i class="far fa-clock fa-lg"></i></li>
          <li> ${recipe.cooking_time} Minutes</li>
      </ul>
      <ul class="">
          <li><i class="fas fa-user-friends fa-lg"></i></li>
          <li> ${recipe.servings} Servings</li>
      </ul>
    </div>

  <ul class="list-style">
      <div class="icon-container">
          <li><i class="far fa-bookmark fa-lg"></i></li>
      </div>
      
      <li>Book Mark</li>
  </ul>
</div>

    
    `;

    recipeDetailsSelector.innerHTML+=recipeInfo;
   Comman.clearHtml(ingredientsSelector);
     recipe.ingredients.forEach(ingredient => {
        ingredient.quantity= ingredient.quantity==null?0:ingredient.quantity
           let html=`
           <div class="col-md-6">
           <ul class="list-style">
               <li><i class="fas fa-check fa-lg"></i></li>
               <li> ${ingredient.quantity} ${ingredient?.unit} ${ingredient.description}</li>
             
              
           </ul>
         </div>
           ` 
          ingredientsSelector.innerHTML+=html;
        
    });
    
}
export function loadSearchResult(searcResult) {
    
     searchList.parentElement.style.display='block';
       
    if(searcResult.length>0)
    {
        searcResult.forEach(recipe=>{
            let html=` <li><a href="#${recipe.id}">${recipe.title} </a></li>
          
          `
          searchList.insertAdjacentHTML("afterbegin",html);
         })
    }
         
    else
    {
      
        searchList.parentElement.style.display='none';
        Comman.clearHtml(searchList);
    }
    Comman.HandlerSearchInputAfterSelect(searchList,searchInput);

 
       
}
export function loadSearchTypesResult(searcResult){
    types.parentElement.style.display='block';
 
    if(searcResult.length>0)
    {
        searcResult.forEach(recipe=>{
            let html=` <li>${recipe}</li>
          
          `
          types.insertAdjacentHTML("afterbegin",html);
         })
    }
         
    else
    {
      
        types.parentElement.style.display='none';
        Comman.clearHtml(types);
    }
 Comman.HandlerSearchInputAfterSelect(types,InputsearchForRecipesType);
}

export function handlerHashEvent(handlerfunction){
    window.addEventListener('hashchange',()=>{
        handlerfunction();
        activeLink();
       
       
    

    })
}
export function HanlderSearchEvent(searchFunction){
    searchInput.addEventListener('keyup',(event)=>{
      
        searchFunction(); 
    })
 
}
export function HanlderSearchTypesEvent(searchFunction){
    InputsearchForRecipesType.addEventListener('keyup',(event)=>{
      
        searchFunction(); 
    })
 
}
export function HanlderSelectedTypeEvent(handlerfunction){
    types.addEventListener('click',(event)=>{ 
        handlerfunction();
      })
}
// export function HanlderSelectedTypeEvent()
// {
//     let x;
//     types.addEventListener('click',()=>{
//         let recipeType=InputsearchForRecipesType.value;
//         x=recipeType;
//         console.log(x);
//     });

   
//     return x;
// }



