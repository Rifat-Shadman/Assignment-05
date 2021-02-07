function searchFunction(){
    document.getElementById('foodList').innerHTML = '';
    document.getElementById('foodDetails').innerHTML = '';
    const keyword = document.getElementById('inputRecipe').value;
    // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${keyword}`)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then(res => res.json())
    .then(data =>{
        const storedData = data;
        console.log(data);
        console.log(data.meals.length);
        const ul = document.getElementById('foodList')

        if(data.meals == null){
            console.log("Array is empty");
        }
        // else{
            for(let i=0; i<data.meals.length && i<8; i++){
                const title = data.meals[i].strMeal;
                const thumbNail = data.meals[i].strMealThumb;
                console.log(title,thumbNail);
    
                document.getElementById('foodList').innerHTML += `
                            <div onclick="showDetails(${title})" class="card" style="width: 18rem;">
                                <img src="${thumbNail}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text" style="color:black">${title}</p>
                                </div>
                            </div>
    
                `
            }
        // }
        // function showDetails(id){
        //     document.getElementById('foodDetails').innerHTML += `
        //     <div class="card" style="width: 18rem;">
        //         <img src="${thumbNail}" class="card-img-top" alt="...">
        //         <div class="card-body">
        //             <p class="card-text" style="color:black">${id}</p>
        //         </div>
        //     </div>
        
        // `
        // }
        
        
    })
}




