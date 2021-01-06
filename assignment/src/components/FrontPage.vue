<template>
  <div class="assignment">
    <div>
      <h1>Shoot The Ducks!</h1>
      <img src="./duck.png" />
    </div>
    <div>
      <button v-on:click="newGame">New game</button>
      <button v-on:click="highScore">Highscore</button>
      <button v-on:click="cancel">X</button>
    </div>
    <br />
    <div>
      <HighScore v-if="gameState == 'highScore'" />
      <br />
      <GamePage :playerName="playerName" v-if="gameState == 'startGame'" />
    </div>
  </div>
</template>

<script>
import HighScore from "./HighScore";
import GamePage from "./GamePage";

export default {
  components: {
    GamePage,
    HighScore,
  },

  data: function () {
    return {
      // levels: [],
      gameState: "",
      playerName: "",
    };
  },
  methods: {
    newGame: function () {
      this.playerName = prompt("Please Enter You name e.g XXX");
      if (
        this.playerName === "" ||
        this.playerName.length < 3 ||
        this.playerName.length > 3
      ) {
        alert("please enter valid input");
      } else {
        this.gameState = "startGame";
      }
    },
    highScore: function () {
      this.gameState = "highScore";
    },
    cancel: function () {
      this.gameState = "";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

h1 {

  text-align: center;
  font-family: "VT323", monospace;
  font-size: 80px;
  margin: 0
}

button {
  font-family: "VT323", monospace;
  font-size: 15px;
  width: 80px;
  height: 50px;
  border: 2px black solid;
  border-radius: 50px;
  margin-left: 5px
}

.assignment {
  text-align: center;
}

img{
    height:100px;
    width:100px
}
</style>


