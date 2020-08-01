<template>
  <div id="cover">
      <form>
        <div class="tb">
            <div class="td"> 
          <input
            v-model="searchString"
            @keydown.13.prevent="parseSearchString"
            type="text"
            name="NAME"
            placeholder="Search by cocktail name..."
            autocomplete="off"
          /></div>
          <div class="td" id="s-cover">
            <button
              @click="parseSearchString"
              type="submit"
              value="Search"
            >
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
    <!-- mobile submit -->
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchString: "",
    };
  },
  methods: {
    parseSearchString() {
      const trimmedSearchString = this.searchString.trim();
      if (trimmedSearchString !== "") {
        const searchParams = trimmedSearchString.split(/\s+/);
        this.$emit("search", searchParams);
        this.searchString = "";
      }
    },
  },
};
</script>

<style scoped>
/* 
body {
  background: #f2f2f2;
  font-family: "Open Sans", sans-serif;
}

.searchBar {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 36px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: #00b4cc;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!
.wrap {
  width: 70%;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
}

.fa-search:before {
  content: "\f002";
}

i {
  vertical-align: top;
} */



.tb
{
    display: table;
    width: 100%;
}

.td
{
    display: table-cell;
    vertical-align: middle;
}

input, button
{
    color: #fff;
    font-family: Nunito;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
}

#cover
{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    outline: none;
    position: relative;
    left: 0;
    right: 0;
    width: 70%;
    padding: 35px;
    flex: center;
    background-color: #353535;
    border-radius: 20px;
    margin: 0 auto;
    box-shadow: 0 10px 40px slategray, 0 0 0 20px #ffffffeb;
    transform: scale(0.6);
}

form
{
    height: 96px;
}

input[type="text"]
{
    width: 100%;
    height: 96px;
    font-size: 60px;
    line-height: 1;
}

input[type="text"]::placeholder
{
    color: grey;
}

#s-cover
{
    width: 1px;
    padding-left: 35px;
}

button
{
    position: relative;
    display: block;
    width: 84px;
    height: 96px;
    cursor: pointer;
}

#s-circle
{
    position: relative;
    top: -8px;
    left: 0;
    width: 70px;
    height: 70px;
    margin-top: 0;
    border-width: 15px;
    border: 15px solid #fff;
    background-color: transparent;
    border-radius: 50%;
    transition: 0.5s ease all;
}

button span
{
    position: absolute;
    top: 68px;
    left: 43px;
    display: block;
    width: 45px;
    height: 15px;
    background-color: transparent;
    border-radius: 10px;
    transform: rotateZ(52deg);
    transition: 0.5s ease all;
}

button span:before, button span:after
{
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 45px;
    height: 15px;
    background-color: #fff;
    border-radius: 10px;
    transform: rotateZ(0);
    transition: 0.5s ease all;
}

#s-cover:hover #s-circle
{
    top: -1px;
    width: 67px;
    height: 15px;
    border-width: 0;
    background-color: #fff;
    border-radius: 20px;
}

#s-cover:hover span
{
    top: 50%;
    left: 56px;
    width: 25px;
    margin-top: -9px;
    transform: rotateZ(0);
}

#s-cover:hover button span:before
{
    bottom: 11px;
    transform: rotateZ(52deg);
}

#s-cover:hover button span:after
{
    bottom: -11px;
    transform: rotateZ(-52deg);
}
#s-cover:hover button span:before, #s-cover:hover button span:after
{
    right: -6px;
    width: 40px;
    background-color: #fff;
}

#ytd-url {
  display: block;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 10px 14px;
  margin: 20px;
  color: #fff;
  font-family: Nunito;
  font-size: 14px;
  text-decoration: none;
  background-color: #ff7575;
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(255, 117, 117, 0.86);
  z-index: 125;
}



</style>
