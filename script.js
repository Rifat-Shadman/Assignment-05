function searchFunction(){
    document.getElementById('foodList').innerHTML = '';
    document.getElementById('foodDetails').innerHTML = '';
    document.getElementById('errorMessage').innerHTML = '';
    const keyword = document.getElementById('inputRecipe').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        // console.log(data.meals.length);
        if (data.meals == null) {
            document.getElementById('errorMessage').innerHTML = `
                        <h3 class="errorMessage text-danger">Sorry! We couldn't find anything.</h3>
                    `
        }
        else{
            
            var kk = 0;
            
            data.meals.forEach(food => {
                const title = food.strMeal;
                const thumbNail = food.strMealThumb;
                const mealID = food.idMeal;
                if(kk<8){
                    kk = kk+1;
                    document.getElementById('foodList').innerHTML += `
                    <div onclick="showDetails(${mealID})" class="card" style="width: 18rem;">
                        <img  src="${thumbNail}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text" style="color:black">${title}</p>
                        </div>
                    </div>
                    ` 
                }
            })
        }   
    })
}




function showDetails(id){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => foodDetails(data.meals[0]));
}

const foodDetails = food =>{
    document.getElementById('foodDetails').innerHTML = '';
    document.getElementById('errorMessage').innerHTML = '';
    document.getElementById('foodDetails').innerHTML += `
    <div  class="card " style="width: 30rem; margin-bottom: 20px">
    <img  src="${food.strMealThumb}" class="card-img-top detailImg" alt="...">
    <div class="card-body overflow-auto" style="height:300px">
        <h5 style="color:black">${food.strMeal} (<em>${food.strArea}</em>)</h5>
        <ul id = "ingredientList">
            <li class="card-text" style="color:black">
            ${food.strMeasure1} ${food.strIngredient1}</li>
            <li class="card-text" style="color:black">
            ${food.strMeasure2} ${food.strIngredient2}</li>
            <li class="card-text" style="color:black">
            ${food.strMeasure3} ${food.strIngredient3}</li>
            <li class="card-text" style="color:black">
            ${food.strMeasure4} ${food.strIngredient4}</li>
            <li class="card-text" style="color:black">
            ${food.strMeasure5} ${food.strIngredient5}</li>
            
        </ul>
        <br>
        <h5 style="color:black">Instructions: </h5>
        <p style= "color:black">${food.strInstructions} </p>
    </div>
    </div> `
}

