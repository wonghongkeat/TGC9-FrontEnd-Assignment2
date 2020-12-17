<template>
  <div>
      <h1>Shoot The Ducks!</h1>
  <div v-for='f in scores' v-bind:key='f._id'>
      <ul>
          <li>name: {{f.name}}</li>
          <li>score: {{f.score}}</li>
      </ul>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
      created:async function(){
        let response = await axios.get('https://3000-dfcbe04c-de1f-4c92-97a7-ec5d4aa86552.ws-us03.gitpod.io/');
        this.scores = response.data;
    },


    data: function(){
        return{
            'scores':[]
        }
    },

  

}



</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

h1{
    text-align: center;
    font-weight: bold;
    font-family: 'VT323', monospace;
    font-size: 80px;
}
</style>

