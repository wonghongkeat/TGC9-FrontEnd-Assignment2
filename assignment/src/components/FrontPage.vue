<template>
  <div class="assignment">
    <div>
      <h1>Shoot The Ducks!</h1>
      <img src="./duck.png" />
    </div>
    <div v-if="gameState=='frontPage'">
      <button v-on:click="newGame">New game</button>
      <button v-on:click="highScore">Highscore</button>
      <button v-on:click="cancel">X</button>
    </div>
    <div>
    <PlayerInput class="playerName" @playerInputResult='playerInput' v-if="gameState == 'playerInput'"/>
    </div>
    <div>
      <HighScore class="highscore" @playerInputResult='playerInput' v-if="gameState == 'highScore'" />
      <br />
      <GamePage :playerName="playerName" @playerInputResult='playerInput' v-if="gameState == 'startGame'" />
    </div>
  </div>
</template>

<script>
import HighScore from "./HighScore";
import GamePage from "./GamePage";
import PlayerInput from "./PlayerInput";

export default {
  components: {
    GamePage,
    HighScore,
    PlayerInput
  },

  data: function () {
    return {
      gameState: "frontPage",
      playerName: "",
    };
  },
  methods: {
      playerInput:function(gameState){
          this.gameState = gameState
      },
    newGame: function(){
        this.gameState = 'playerInput'
    },
  
    highScore: function () {
      this.gameState = "highScore";
    },
    cancel: function () {
      this.gameState = "frontPage";
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
  margin: 0;
}

button {
  font-family: "VT323", monospace;
  font-size: 15px;
  width: 80px;
  height: 50px;
  border: 2px black solid;
  border-radius: 50px;
  margin-left: 5px;
}

.assignment {
  text-align: center;
}

img {
  height: 100px;
  width: 100px;
}

.highscore{
    height:75%;
    width:80%;
    border: 2px red solid;
    margin:auto;
    top: 20px

}
</style>


