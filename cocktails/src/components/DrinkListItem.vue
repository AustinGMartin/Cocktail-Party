<template>
  <div class="cards">
    <router-link :to="{name: 'DrinkDetails', params: {idDrink: drink.idDrink}}">
      <div class="card-body">
        <h5 class="card-title">{{ drink.strDrink }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ drink.strCategory }} | {{drink.strAlcoholic}}</h6>
        <p class="card-text">{{ drink.strInstructions }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "DrinkGridItem",
  props: ["drink"],
};
</script>

<style scoped>
    .card-title {
        color:black;
    }
    .card-text {
        color:#343A40;
    }

    .card {
        border: 0px;
    }
    .cards {
        transition: 0.5s ease;
        cursor: pointer;
        background: white;
        border: 1px solid rgba(0,0,0,.125);
    }
    .cards:hover {
        transform: scale(1.05);
        box-shadow: 5px 5px 15px #343A40;
    }
    .card-body {
        border: 0px;
    }
</style>