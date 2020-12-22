<template>
  <div>
      <button v-on:click='randomStart' v-bind:class='isHidden'>start</button>
      <p>{{randomNumber}}</p>
      <p>{{randomNumber2}}</p>
      <p>points:{{points}}</p>
      <table>
          <tr v-for='(r, row) in board' v-bind:key='row'>
              <td v-for='(c, column) in r' v-bind:key='row*3+column'>
                  <img src='./duck.png' v-on:click='toDelete' v-show='board[row][column]'/>
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
                ["", "", "","",""],
                ["", "", "","",""],
                ["", "", "","",""]
            ],
            // display: false,
            randomNumber: 0,
            randomNumber2: 0,
            points: 0,

           
        }
    },
    methods: {
        randomStart: function(){
            let Xrow = parseInt(Math.random() * (3 - 0) + 0)
            this.randomNumber = Xrow
            let Xcolumn = parseInt(Math.random() * (5 - 0) + 0)
            this.randomNumber2 = Xcolumn
            this.board[Xrow][Xcolumn] = true;
            // if(this.board[Xrow][Xcolumn]==true){
            //      this.board[Xrow][Xcolumn] = false
            // }
        },
        toDelete: function(){
             for (let r of this.board){
                for (let c of r){
                    if(c === true){
                        c = false
                        break
                    }
             }
        }
                 this.randomStart()
    }
    }
}
</script>

<style>


table{
    text-align: center;
}
td{
    border-bottom: 10px green dashed;
    width: 150px;
    height: 150px;
}

img{
    width: 100px;
    height: 100px
}

</style>