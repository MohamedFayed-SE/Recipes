import Swal from "sweetalert2";
const recipeList=document.querySelector('.recipe-list');
const spinnerSelector=document.querySelector('.loader-container');

const timeOut=function (time){
    return new Promise((_,reject)=>{
        setTimeout(() => {
            reject(new Error("Some thing Went Wrong PLease Try Aagin"))
        }, time*1000);
    })
}
const fecthData=async function(url) {
  

    const res=await fetch(url);
    const data=await res.json();
 
    if(!res.ok)
        throw new Error(`${data.status} ${data.message}`);

   
    return data;
}
export function clearHtml(htmlSelector) {
    htmlSelector.innerHTML='';
}
export function showSpinner(){
    spinnerSelector.style.display="flex";
}
export function hideSpinner(){
    spinnerSelector.style.display="none";
}

export const getJson=async function(url){

    try{
        showSpinner();
        const data= await Promise.race([
            fecthData(url),
            timeOut(5)
        ])
      hideSpinner();
        return data;
      

    }catch(err){
        hideSpinner();
         HanlderError(err);
        
    }
}
export const hideSelector=function(selector)
{
    selector.style.display='none';
    console.log("HIDE");
}
export function HandlerSearchInputAfterSelect(searchList,inputSelector){
   
   return searchList.addEventListener('click',(e)=>{
       
      inputSelector.value=e.target.innerHTML;
      hideSelector(searchList.parentElement);
       return inputSelector.value;
     
        
     
    })
    
}
export function filter(array,query){
    let searchResult =[];
    if(!query)
      return searchResult;
    array.forEach(item => {
        if(item.title)
        {
            if(item.title.toLowerCase().indexOf(query.toLowerCase())>-1)
            searchResult.unshift(item);
        }
        else {
            if(item.toLowerCase().indexOf(query.toLowerCase())>-1)
            searchResult.unshift(item);
        }
       
    });
    return searchResult;
}
export function HanlderError(error)
{
    Swal.fire({
        title:'Error',
        text:`${error}`,
        icon:'error'
    })
}