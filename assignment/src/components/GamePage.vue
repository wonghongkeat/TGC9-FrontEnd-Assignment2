<template>
  <div>
      <button v-on:click='randomStart'>start</button>
      <p>{{randomNumber}}</p>
      <p>{{randomNumber2}}</p>
      <p>points:{{points}}</p>
      <table>
          <tr v-for='(r, row) in board' v-bind:key='row'>
              <td v-for='(c, column) in r' v-bind:key='row*3+column'>
                  {{c}}
                  <img src='./duck.png' v-show='board[row][column]' v-on:click='randomStart'/>
              </td>
          </tr>
          </table>

</div>
</template>

<script>
export default {
    data: function(){
        return {
            board: [
                [false,false,false,false,false],
                [false,false,false,false,false],
                [false,false,false,false,false]
            ],
            // display: false,
            randomNumber: 0,
            randomNumber2: 0,
            points: 0
           
        }
    },
    methods: {
        randomStart: function(){
            let Xrow = parseInt(Math.random() * (3 - 0) + 0)
            this.randomNumber = Xrow
            let Xcolumn = parseInt(Math.random() * (5 - 0) + 0)
            this.randomNumber2 = Xcolumn
            this.board[Xrow][Xcolumn] = true;
            this.points += 1
        }
    }

}
</script>

<style>
table{
    text-align: center;
}
td{
    border: 2px red solid;
    width: 150px;
    height: 150px;
}

img{
    width: 100px;
    height: 100px
}

</style>