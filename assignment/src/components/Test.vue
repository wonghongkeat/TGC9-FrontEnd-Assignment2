<template>
  <div>
    <button v-on:click="randomStart">start</button>
    <p>{{ randomNumber }}</p>
    <p>{{ randomNumber2 }}</p>
    <p>points:{{ points }}</p>
    <table>
      <tr v-for="(r, row) in board" v-bind:key="row">
        <td v-for="(c, column) in r" v-bind:key="row * 3 + column">
         <h1 v-on:click='toDelete'>{{c}}</h1>
          <!-- <img src='./duck.png' v-on:click='toDelete' v-show='board[row][column]'/> -->
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
      display: true
    };
  },
  methods: {
    randomStart: function () {
      let Xrow = parseInt(Math.random() * (3 - 0) + 0);
      this.randomNumber = Xrow;
      let Xcolumn = parseInt(Math.random() * (5 - 0) + 0);
      this.randomNumber2 = Xcolumn;
      this.$set(this.board[Xrow], Xcolumn, 100);
    },
    toDelete: function () {
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 5; c++) {
          if (c==100) { 
            this.$set(this.board[r],[c], 0);
            break
          }
        }

      }
      this.randomStart();
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