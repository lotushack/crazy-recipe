const url = 'https://proxy.calweb.xyz/http://www.recipepuppy.com/api/?q=';
const foodItems = document.getElementById('results-container');
const search = "";

const searchInput = document.querySelector('input[name = "search"]');


searchInput.addEventListener('search', function(event){
console.log(event.target.value);
getSearch = event.target.value
})

fetch(url + search).then(function(res) {
  // console.log(res);
  return res.json().then(function(data) {
    console.log(data);
    let recipies = data.results

    for (i = 0; i < 12; i++) {
      let recipe = recipies[i]
// console.log(recipe);

      function mainHTML(data) {
        let results = `
    <div class="recipe">
        <img class="thumbnail" src="${recipe.thumbnail}">
      <ul>
        <li class="title"><a href="${recipe.href}">${recipe.title}</a></li>
        <li class="ingredients">Ingredients: ${recipe.ingredients}</li>
      </ul>
    </div>
    `
        return results
      }
      // console.log(searchInfo);
      let pageRecipies = mainHTML(data)
      foodItems.innerHTML += pageRecipies;

    }
  })
})



//   for (var i = 0; i < HTMLinfo.length; i++) {
//   HTMLinfo = HTMLinfo[i]
//   }
// }
