<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand col-lg-9">
          <span class="fa-stack fa-lg">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fas fa-cocktail fa-stack-1x fa-inverse"></i>
          </span>
          <span class="ml-3">Pour Yourself A Drink</span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
i {
  vertical-align: middle;
}

i.fa-cocktail {
  color: white;
}
i.fa-circle {
  color: red;
}

i + span {
  vertical-align: middle;
}
</style>