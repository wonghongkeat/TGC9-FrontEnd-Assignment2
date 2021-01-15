<template>
  <div class="gamepage">
    <div class="score">
      <h2>Player: {{ gamePlayerName }}</h2>
      <h2>time: {{ gameTime }}</h2>
      <h2>points:{{ points }}</h2>
    </div>

    <div class="table">
      <table v-if="gameLevelSelected">
        <tr v-for="(r, row) in board" v-bind:key="row">
          <td v-for="(c, column) in r" v-bind:key="row * 3 + column">
            <img
              class="img"
              src="./duck.png"
              v-on:click="toDelete"
              v-show="board[row][column]"
            />
          </td>
        </tr>
      </table>
    </div>
    <div class="gameStart">
      <button
        v-if="gameLevelSelected"
        v-on:click="
          timer();
          randomStart();
        "
        :disabled="startDisabled"
      >
        start
      </button>
      <button
        v-on:click="gameEnd"
        :disabled="endDisabled"
        v-if="gameLevelSelected"
      >
        End
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: async function () {
    let response = await axios.get(
      "https://3000-dfcbe04c-de1f-4c92-97a7-ec5d4aa86552.ws-us03.gitpod.io/players_score"
    );
    this.players_score = response.data;
  },

  data: function () {
    return {
      currentDuck: 0,
      gamePlayerName: this.playerName,
      gameLevelSelected: this.levelSelected,
      gameTime: this.time,
      players_score: [],
      show: true,
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
        level: this.gameLevelSelection,
      },
      startDisabled: false,
      endDisabled: true,
      intervalId: null,
    };
  },

  props: [
    "playerName",
    "levelSelected",
    "time",
    "levelSelection",
    "gameLevelSelection",
  ],

  methods: {
    levels_edit: async function () {
      await axios.patch(
        "https://3000-dfcbe04c-de1f-4c92-97a7-ec5d4aa86552.ws-us03.gitpod.io/level/" +
          this.levelSelection,
        this.playerScore
      );
    },
    player_score_edit: async function () {
      await axios.patch(
        "https://3000-dfcbe04c-de1f-4c92-97a7-ec5d4aa86552.ws-us03.gitpod.io/players_score/" +
          this.playerScore.name,
        this.playerScore
      );
    },
    player_score_create: async function () {
      await axios.post(
        "https://3000-dfcbe04c-de1f-4c92-97a7-ec5d4aa86552.ws-us03.gitpod.io/players_score/create",
        this.playerScore
      );
    },
    resetGame: function () {
      this.gameTime = null;
      this.playerScore.name = this.gamePlayerName;
      this.playerScore.score = this.points;
      this.startDisabled = false;
      this.endDisabled = true;
      this.gamePlayerName = "";
      this.board = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ];
      this.points = 0;
    },

    randomStart: function () {
      let Xrow = parseInt(Math.random() * (3 - 0) + 0);
      let Xcolumn = parseInt(Math.random() * (5 - 0) + 0);
      if (this.currentDuck === Xrow) {
        if (this.currentDuck === 0) {
          this.currentDuck = this.currentDuck + 2;
          this.board[this.currentDuck][Xcolumn] = true;
        } else if (this.currentDuck === 1 || this.currentDuck === 2) {
          this.currentDuck = this.currentDuck - 1;
          this.board[this.currentDuck][Xcolumn] = true;
        }
      } else {
        this.board[Xrow][Xcolumn] = true;
        this.currentDuck = Xrow;
      }
      console.log(this.currentDuck);
      console.log("newXcolumn" + Xcolumn);
      this.startDisabled = true;
      this.endDisabled = false;
    },

    timer: function () {
      if (this.gameTime != 0) {
        this.intervalId = setInterval(async () => {
          if (this.gameTime === 0) {
            clearInterval(this.intervalId);
            this.gameLevelSelected = false;
            alert(
              this.gamePlayerName +
                " " +
                "score" +
                " " +
                this.points +
                " " +
                "points"
            );

            let y = this.players_score;
            let x = this.gamePlayerName;
            let newPlayer = y.find(({ name }) => name === x);

            if (!newPlayer) {
              this.resetGame();
              await this.player_score_create();
              await this.levels_edit();
            } else {
              this.resetGame();
              await this.player_score_edit();
              await this.levels_edit();
            }
            this.$emit("playerInputResult", (this.gameState = "frontPage"));
          }
          this.gameTime -= 1;
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
        this.gamePlayerName + " " + "score" + " " + this.points + " " + "points"
      );
      clearInterval(this.intervalId);
      let y = this.players_score;
      let x = this.playerName;
      let newPlayer = y.find(({ name }) => name === x);

      if (!newPlayer) {
        this.resetGame();
        await this.player_score_create();
        await this.levels_edit();
      } else {
        this.resetGame();
        await this.player_score_edit();
        await this.levels_edit();
      }

      this.$emit("playerInputResult", (this.gameState = "frontPage"));
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

.gamepage {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.table {
  height: 100%;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
}

.score {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "VT323", monospace;
  height: 50px;
}

table {
  text-align: center;
}
td {
  width: 150px;
  height: 150px;
}

.img {
  width: 100px;
  height: 100px;
}

img :hover {
  cursor: pointer;
}

.gameStart {
  margin-top: 10px;
}
</style>