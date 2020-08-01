<template>
  <div class="container mb-3">
    <div class="d-flex mb-3">
      <div class="mr-auto">
        <h3>Search Results for "{{ searchString }}"</h3>
      </div>
      <div class="btn-group ml-auto" role="group">
        <button
          @click="changeDisplayMode('grid')"
          type="button"
          class="btn btn-outline-secondary"
          v-bind:class="{ active: displayMode === 'grid' }"
        >
          <i class="fas fa-th"></i>
        </button>
        <button
          @click="changeDisplayMode('list')"
          type="button"
          class="btn btn-outline-secondary"
          v-bind:class="{ active: displayMode === 'list' }"
        >
          <i class="fas fa-list"></i>
        </button>
      </div>
    </div>

    <div class="card-columns" v-if="displayMode === 'grid'">
      <div class="card" v-bind:key="drink.idDrink" v-for="drink in drinks">
        <DrinkGridItem v-bind:drink="drink" />
      </div>
    </div>
    <div v-else>
      <div class="card mb-2" v-bind:key="drink.idDrink" v-for="drink in drinks">
        <DrinkListItem v-bind:drink="drink" />
      </div>
    </div>
  </div>
</template>

<script>
import DrinkListItem from "./DrinkListItem";
import DrinkGridItem from "./DrinkGridItem";

export default {
  name: "SearchResults",
  components: {
    DrinkListItem,
    DrinkGridItem,
  },
  data() {
    return {
      title: "Search Results",
      displayMode: "grid",
    };
  },
  methods: {
    changeDisplayMode(displayMode) {
      this.displayMode = displayMode;
    },
  },
  props: ["drinks", "searchString"],
};
</script>

<style scoped>
button:focus {
  box-shadow: none !important;
}
</style>