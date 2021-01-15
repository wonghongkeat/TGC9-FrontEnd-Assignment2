<template>
  <div>
    <button v-on:click="level1">level 1</button>
    <button v-on:click="level2">level 2</button>
    <button v-on:click="level3">level 3</button>
    <button v-on:click="cancel">X</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: async function () {
    let response = await axios.get(
      "https://3000-dfcbe04c-de1f-4c92-97a7-ec5d4aa86552.ws-us03.gitpod.io/"
    );
    this.levels = response.data;
  },

  data: function () {
    return {
      levels: [],
      level: "",
      gameLevel: "",
      gameLevelTime: null,
    };
  },

  methods: {
    cancel: function () {
      this.$emit("playerInputResult", (this.gameState = "frontPage"));
    },

    level1: function () {
      this.level = this.levels[0]._id;
      this.gameLevel = 1
      this.$emit("selectedGameLevel", this.gameLevel);
      this.$emit("selectedLevel", this.level);
      this.$emit("diffLevel", (this.gameLevelTime = 15));
      this.$emit("levelSelected", (this.levelSelection = true));
      this.$emit("playerInputResult", (this.gameState = "startGame"));
    },
    level2: function () {
      this.level = this.levels[1]._id;
      this.gameLevel = 2;
      this.$emit("selectedGameLevel", this.gameLevel);
      this.$emit("selectedLevel", this.level);
      this.$emit("diffLevel", (this.gameLevelTime = 10));
      this.$emit("levelSelected", (this.levelSelection = true));
      this.$emit("playerInputResult", (this.gameState = "startGame"));
    },
    level3: function () {
      this.level = this.levels[2]._id;
      this.gameLevel = 3;
      this.$emit("selectedGameLevel", this.gameLevel);
      this.$emit("selectedLevel", this.level);
      this.$emit("diffLevel", (this.gameLevelTime = 5));
      this.$emit("levelSelected", (this.levelSelection = true));
      this.$emit("playerInputResult", (this.gameState = "startGame"));
    },
  },
};
</script>

<style scoped>
button {
  border: 2px black solid;
  border-radius: 50px;
  margin-left: 5px;
}
</style>