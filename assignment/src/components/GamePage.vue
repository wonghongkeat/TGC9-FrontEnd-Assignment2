<template>
  <div>
    <button v-on:click="randomStart" :disabled="startDisabled">start</button>
    <button v-on:click="gameEnd" :disabled="endDisabled">End</button>
    <p>{{ randomNumber }}</p>
    <p>{{ randomNumber2 }}</p>
    <h2>Player: {{ playerName }}</h2>
    <p>points:{{ points }}</p>
    <table>
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
export default {

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
    };
  },
  props: ["playerName"],

  methods: {
    randomStart: function () {
      let Xrow = parseInt(Math.random() * (3 - 0) + 0);
      this.randomNumber = Xrow;
      let Xcolumn = parseInt(Math.random() * (5 - 0) + 0);
      this.randomNumber2 = Xcolumn;
      this.board[Xrow][Xcolumn] = true;
      this.startDisabled = true;
      this.endDisabled = false;
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

    gameEnd: function () {
      alert(
        this.playerName + " " + "score" + " " + this.points + " " + "points"
      );
      
      this.startDisabled = false;
      this.endDisabled = true;
      this.playerScore.name = this.playerName;
      this.playerScore.score = this.points;
      this.playerName = ""
      this.board = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ];
      this.points = 0;
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