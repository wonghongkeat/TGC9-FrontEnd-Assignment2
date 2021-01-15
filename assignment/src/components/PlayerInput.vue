<template>
  <div class="playerName">
    <div>
      <label>Please enter your Name</label>
      <br />
      <label>E.g XXX</label>
      <br />
      <input type="text" v-model="name" v-on:click="input" />
      <br />
      <p>{{ fault }}</p>
      <button class="submit" v-on:click="newGame">Enter</button>
      <button v-on:click="cancel">X</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      fault: "",
      name: "",
    };
  },

  methods: {
    cancel: function () {
      this.$emit("playerInputResult", (this.gameState = "frontPage"));
    },

    input: function () {
      this.fault = "";
    },

    newGame: function () {
      if (this.name === "" || this.name.length < 3 || this.name.length > 3) {
        this.fault = "please enter only 3 characters";
      } else {
        this.$emit("playerInputResult", (this.gameState = "gameLevel"));
        this.$emit("playerInputName", this.name);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
label {
  text-align: center;
  font-family: "VT323", monospace;
  font-size: 30px;
}

input {
  height: 25px;
  border-radius: 10px;
}
</style>