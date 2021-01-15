<template>
  <div id="app">
    <FrontPage/>

  </div>
</template>

<script>
import FrontPage from "./components/FrontPage"


export default {
  name: "App",
  components: {
      FrontPage,
  },
  data: function () {
    return {
    };
  },
};
</script>

<style scoped>

#app{
    background-color: lightseagreen;
    min-height: 100vh;
    display:flex;
    justify-content:space-around;
    flex-direction:column
}
</style>
