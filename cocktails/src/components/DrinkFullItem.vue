<template>
  <div class="container mt-5">
    <div class="row">
      <img class="card-img-top col-lg-5" :src="drink.strDrinkThumb" alt="Drink thumbnail" />
      <div class="card-body col-lg-7">
        <h5 class="card-title">{{ drink.strDrink }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ drink.strCategory }} | {{drink.strAlcoholic}}</h6>
        <!-- Please forgive me. 
            This is the maybe the dumbest way to do this, but the best fix would be changing the API to give an array of ingredients,
            and I'm frankly embarrassed I didn't just write a script for this, but it's too late and it's functional'
            Also, the data is just bad, see /drink/12786, 1/4 cup Thai is measure1, Tea is Ingredient 1, 
            but then cubes is Measure4 and Ice is Ingredeint4
        End rant-->
        <ul>
          <li
            class="card-text"
            v-if="drink.strMeasure1 || drink.strIngredient1"
          >{{ drink.strMeasure1 }} {{ drink.strIngredient1 }}</li>
          <li
            class="card-text"
            v-if="drink.strMeasure2 || drink.strIngredient2"
          >{{ drink.strMeasure2 }} {{ drink.strIngredient2 }}</li>
          <li
            class="card-text"
            v-if="drink.strMeasure3 || drink.strIngredient3"
          >{{ drink.strMeasure3 }} {{ drink.strIngredient3 }}</li>
          <li
            class="card-text"
            v-if="drink.strMeasure4 || drink.strIngredient4"
          >{{ drink.strMeasure4 }} {{ drink.strIngredient4 }}</li>
          <li
            class="card-text"
            v-if="drink.strMeasure5 || drink.strIngredient5"
          >{{ drink.strMeasure5 }} {{ drink.strIngredient5 }}</li>
          <li
            class="card-text"
            v-if="drink.strMeasure6 || drink.strIngredient6"
          >{{ drink.strMeasure6 }} {{ drink.strIngredient6 }}</li>
          <li
            class="card-text"
            v-if="drink.strMeasure7 || drink.strIngredient7"
          >{{ drink.strMeasure7 }} {{ drink.strIngredient7 }}</li>
          <li
            class="card-text"
            v-if="drink.strMeasure8 || drink.strIngredient8"
          >{{ drink.strMeasure8 }} {{ drink.strIngredient8 }}</li>
          <li
            class="card-text"
            v-if="drink.strMeasure9 || drink.strIngredient9"
          >{{ drink.strMeasure9 }} {{ drink.strIngredient9 }}</li>
          <li
            class="card-text"
            v-if="drink.strMeasure10 || drink.strIngredient10"
          >{{ drink.strMeasure10 }} {{ drink.strIngredient10 }}</li>
          <li
            class="card-text"
            v-if="drink.strMeasure11 || drink.strIngredient11"
          >{{ drink.strMeasure11 }} {{ drink.strIngredient11 }}</li>
          <li
            class="card-text"
            v-if="drink.strMeasure12 || drink.strIngredient12"
          >{{ drink.strMeasure12 }} {{ drink.strIngredient12 }}</li>
          <li
            class="card-text"
            v-if="drink.strMeasure13 || drink.strIngredient13"
          >{{ drink.strMeasure13 }} {{ drink.strIngredient13 }}</li>
          <li
            class="card-text"
            v-if="drink.strMeasure14 || drink.strIngredient14"
          >{{ drink.strMeasure14 }} {{ drink.strIngredient14 }}</li>
          <li
            class="card-text"
            v-if="drink.strMeasure15 || drink.strIngredient15"
          >{{ drink.strMeasure15 }} {{ drink.strIngredient15 }}</li>
        </ul>
        <p class="card-text">{{ drink.strInstructions }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DrinkFullItem",
  props: ["drink"],
};
</script>