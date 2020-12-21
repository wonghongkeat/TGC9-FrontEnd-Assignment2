<template>
  <div id="app">
      <FrontPage/>
      <GamePage/>
  </div>
</template>

<script>

import FrontPage from "./components/FrontPage"
import GamePage from "./components/GamePage"

export default {
  name: 'App',
  components: {
      FrontPage, GamePage
  }
}
</script>

<style>

</style>
