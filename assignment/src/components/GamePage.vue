<template>
  <div>
    <GameLevels
      :playerScore="playerScore"
      @diffLevel="diffTime"
      @levelSelected="levelSelection"
      @selectedLevel="levelId"
    />
    <button
      v-if="levelSelected"
      v-on:click="
        timer();
        randomStart();
      "
      :disabled="startDisabled"
    >
      start
    </button>
    <button v-on:click="gameEnd" :disabled="endDisabled" v-if="levelSelected">
      End
    </button>
    <h2>Player: {{ playerName }}</h2>
    <h2>time: {{ time }}</h2>
    <h2>points:{{ points }}</h2>
    <table v-if="levelSelected">
      <tr v-for="(r, row) in board" v-bind:key="row">
        <td v-for="(c, column) in r" v-bind:key="row * 3 + column">
          <img
            src="./duck.png"
            v-on:click="toDelete"
            v-show="board[row][column]"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import GameLevels from "./GameLevels";
import axios from "axios";

export default {
  components: {
    GameLevels,
  },

  data: function () {
    return {
      board: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ],
      randomNumber: 0,
      randomNumber2: 0,
      points: 0,
      playerScore: {
        name: "",
        score: "",
      },
   
      startDisabled: false,
      endDisabled: true,
      levelSelected: false,
      time: null,
      intervalId: null,
      level: "",
    };
  },
  props: ["playerName"],

  methods: {
    resetGame: function () {
      this.time = null;
      this.playerScore.name = this.playerName;
      this.playerScore.score = this.points;
      this.startDisabled = false;
      this.endDisabled = true;
    //   this.playerName = "";
      this.board = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ];
      this.points = 0;
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

    randomStart: function () {
      let Xrow = parseInt(Math.random() * (3 - 0) + 0);
      this.randomNumber = Xrow;
      let Xcolumn = parseInt(Math.random() * (5 - 0) + 0);
      this.randomNumber2 = Xcolumn;
      this.board[Xrow][Xcolumn] = true;
      this.startDisabled = true;
      this.endDisabled = false;
    },

    timer: function () {
      if (this.time != 0) {
        this.intervalId = setInterval(() => {
          if (this.time === 0) {
            clearInterval(this.intervalId);

            this.levelSelected = false;
            alert(
              this.playerName +
                " " +
                "score" +
                " " +
                this.points +
                " " +
                "points"
            );
            this.resetGame();
          }
          this.time -= 1;
        }, 1000);
      }
    },

    toDelete: function () {
      for (let r = 0; r < this.board.length; r++) {
        for (let c = 0; c < 5; c++) {
          if (this.board[r][c] === true) {
            this.$set(this.board[r], c, "");
            break;
          }
        }
      }
      this.randomStart();
      this.points += 1;
    },

    gameEnd: async function () {
      alert(
        this.playerName + " " + "score" + " " + this.points + " " + "points"
      );
      clearInterval(this.intervalId);
      this.resetGame();
      await axios.patch(
        "https://3000-dfcbe04c-de1f-4c92-97a7-ec5d4aa86552.ws-us03.gitpod.io/" +
          this.level,
        this.playerScore
      );
    },
  },
};
</script>

<style>
table {
  text-align: center;
}
td {
  border-bottom: 10px green dashed;
  width: 150px;
  height: 150px;
}

img {
  width: 100px;
  height: 100px;
}
</style>