<template>
  <div class="assignment">
    <div>
      <h1>Shoot The Ducks!</h1>
      <img src="./duck.png" />
    </div>
    <div v-if="gameState == 'enter'">
      <button v-on:click="enter">Enter</button>
    </div>
    <div v-if="gameState == 'frontPage'">
      <button v-on:click="newGame">New game</button>
      <button v-on:click="highScore">Highscore</button>
      <button v-on:click="cancel">X</button>
    </div>
    <div>
      <HighScore
        class="highscore"
        @playerInputResult="playerInput"
        v-if="gameState == 'highScore'"
      />
      <PlayerInput
        class="playerName"
        @playerInputName="playerNameInput"
        @playerInputResult="playerInput"
        v-if="gameState == 'playerInput'"
      />
      <GameLevel
        @diffLevel="diffTime"
        @levelSelected="levelSelection"
        @selectedLevel="levelId"
        @playerInputResult="playerInput"
        @selectedGameLevel="gameLevelSelected"
        v-if="gameState == 'gameLevel'"
      />
      <GamePage
        :playerName="playerName"
        :levelSelected="levelSelected"
        :time="time"
        :levelSelection="level"
        :gameLevelSelection="gameLevelSelection"
        @playerInputResult="playerInput"
        v-if="gameState == 'startGame'"
      />
    </div>
  </div>
</template>

<script>
import HighScore from "./HighScore";
import GamePage from "./GamePage";
import PlayerInput from "./PlayerInput";
import GameLevel from "./GameLevels";

export default {
  components: {
    GamePage,
    HighScore,
    PlayerInput,
    GameLevel,
  },

  data: function () {
    return {
      gameState: "enter",
      playerName: "",
      levelSelected: true,
      time: null,
      level: "",
      gameLevelSelection: "",
    };
  },


  methods: {
    enter: function () {
      this.gameState = "frontPage";
    },

    gameLevelSelected: function (gameLevel) {
      this.gameLevelSelection = gameLevel;
    },

    levelId: function (level) {
      this.level = level;
    },

    levelSelection: function (levelSelection) {
      this.levelSelected = levelSelection;
    },

    diffTime: function (gameLevelTime) {
      this.time = gameLevelTime;
    },

    playerNameInput: function (name) {
      this.playerName = name;
    },

    playerInput: function (gameState) {
      this.gameState = gameState;
    },

    newGame: function () {
      this.gameState = "playerInput";
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

</style>


