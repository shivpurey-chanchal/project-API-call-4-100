let card = document.querySelector(".card");
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.drinks);
    let arr = data.drinks;
    let drink = arr.map((item) => {
      return `
       <div class="card-container">
        <div class="card u-clearfix">
          <div class="card-body">
            <span class="card-number subtle">${item.strAlcoholic}</span>
            <span class="card-author subtle">${item.strCategory}</span>
            <h2 class="card-title">${item.strDrink}</h2>
            <span class="card-description subtle">${item.strIngredient1} - ${item.strIngredient2} - ${item.strIngredient3} - ${item.strIngredient4} - ${item.strIngredient5}</span>
          </div>
          <img src="${item.strDrinkThumb}" alt="" class="card-media" />
        </div>
        <div class="card-shadow"></div>
        </div>`;
    });
    card.innerHTML = drink;
  })
  .catch((err) => {
    console.log(err);
  });
