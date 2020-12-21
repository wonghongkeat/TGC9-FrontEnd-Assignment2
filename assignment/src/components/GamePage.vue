<template>
  <div>
      <table>
          <tr v-for='(r, row) in board' v-bind:key='row'>
              <td v-for='(c, column) in r' v-bind:key='row*3+column'>
                  {{c}}
                  <img src='./duck.png' v-show='display'/>
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
                [1,2,3,4,5],
                [6,7,8,9,10],
                [11,12,13,14,15]
            ],
            display: true
           
        }
    },

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