<template>
  <div>
    <button v-on:click="randomStart">start</button>
    <p>{{ randomNumber }}</p>
    <p>{{ randomNumber2 }}</p>
    <p>points:{{ points }}</p>
    <button v-on:click="countDown" class="button">
      {{ timer }}
    </button>
    <table>
      <tr v-for="(r, row) in board" v-bind:key="row">
        <td v-for="(c, column) in r" v-bind:key="row * 3 + column">
          <!-- <h1 v-on:click='toDelete'>{{c}}</h1> -->
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
      timer : 0,
      board: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ],

      randomNumber: 0,
      randomNumber2: 0,
      points: 0,

 
    };
  },
  methods: {
    countDown: function () {
   
      if (this.timer < 10) {
        setTimeout(() => {
          this.timer += 1;
          this.countDown();
        }, 1000);
      }
    
    },
    randomStart: function () {
      let Xrow = parseInt(Math.random() * (3 - 0) + 0);
      this.randomNumber = Xrow;
      let Xcolumn = parseInt(Math.random() * (5 - 0) + 0);
      this.randomNumber2 = Xcolumn;
      this.board[Xrow][Xcolumn] = true;
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

.button{
    width: 100px;
    height:50px;
    font-weight: bold;
    font-size: 2rem;
}
</style>