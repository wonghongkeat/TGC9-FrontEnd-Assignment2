<template>
  <div>
      <h1>Shoot The Ducks!</h1>
  <div v-for='f in faults' v-bind:key='f._id'>
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
    data: function(){
        return{
            'faults':[]
        }
    },

    created:async function(){
        let response = await axios.get('https://3000-dfcbe04c-de1f-4c92-97a7-ec5d4aa86552.ws-us03.gitpod.io/');
        this.faults = response.data;
    },

}
</script>

<style scoped>
h1{
    text-align: center;
    font-weight: bold;
}
</style>

