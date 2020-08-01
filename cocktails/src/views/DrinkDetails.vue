<template>
  <div>
    <DrinkFullItem v-bind:drink="drink[0]" />
  </div>
</template>

<script>
import axios from "axios";
import DrinkFullItem from "../components/DrinkFullItem.vue";

export default {
  name: "DrinkDetails",
  components: { DrinkFullItem },
  data() {
    return {
      drink: Object,
      api: {
        baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?",
        i: "",
      },
    };
  },
  methods: {
    getDrinkData(idDrink) {
      this.api.i = idDrink;
      const { baseUrl, i } = this.api;
      const apiUrl = `${baseUrl}i=${i}`;
      this.getData(apiUrl);
    },
    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then((response) => {
          this.drink = response.data.drinks;
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.getDrinkData(this.idDrink);
  },
  props: {
    idDrink: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
