<template>
  <div>
    <div>
      <div class="highscore">
        <button v-on:click="levelOne">Level 1</button>
        <button v-on:click="levelTwo">Level 2</button>
        <button v-on:click="levelThree">Level 3</button>
        <h2 id="highscore">Highscore</h2>
        <div v-for="f in filteredLevel" v-bind:key="f._id">
         <h2>level: {{ f.level }}</h2>
              <ul v-for="p in f.player" v-bind:key="p.player">
                <li>{{ p.name }}: {{ p.score }}</li>
              </ul>
    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: async function () {
    let response = await axios.get(
      "https://3000-dfcbe04c-de1f-4c92-97a7-ec5d4aa86552.ws-us03.gitpod.io/"
    );
    this.levels = response.data;
  },

  data: function () {
    return {
      levels: [],
      level: "1",
    };
  },

  methods: {
    levelOne: function () {
      this.level = "1";
    },

    levelTwo: function () {
      this.level = "2";
    },

    levelThree: function () {
      this.level = "3";
    },
  },

 computed: {
        filteredLevel:function() {
            let filtered = this.levels.filter((eachLevel)=>{
                return eachLevel.level.includes(this.level)
            })

            return filtered;
        }
    }


};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
button {
  font-family: "VT323", monospace;
  font-size: 15px;
  width: 80px;
  height: 50px;
}

#highscore {
  text-align: center;
  font-family: "VT323", monospace;
  font-size: 35px;
}

ul li {
  list-style-type: none;
}
</style>