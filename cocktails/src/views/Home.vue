<template>
  <div id="Home">
    <SearchBar v-on:search="search" />
    <SearchResults
      v-if="drinks.length > 0"
      v-bind:drinks="drinks"
      v-bind:searchString="searchString"
    />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import SearchResults from "../components/SearchResults.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    SearchBar,
    SearchResults,
  },
  data() {
    return {
      drinks: [],
      searchString: "",
      api: {
        baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/search.php?",
        s: "",
      },
    };
  },
  methods: {
    search(searchParams) {
      this.searchString = searchParams.join(" ");
      this.api.s = searchParams.join("+");
      const { baseUrl, s } = this.api;
      const apiUrl = `${baseUrl}s=${s}`;
      this.getData(apiUrl);
    },
    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then((response) => {
          this.drinks = response.data.drinks;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>
