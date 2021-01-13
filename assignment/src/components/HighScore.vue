<template>
  <div>
    <div>
      <div class="highscore">
        <button v-on:click="levelOne">Level 1</button>
        <button v-on:click="levelTwo">Level 2</button>
        <button v-on:click="levelThree">Level 3</button>
        <button v-on:click="cancel">X</button>
        <h2 id="highscore">Highscore</h2>
        <div v-for="f in filteredLevel" v-bind:key="f._id">
          <h2>level: {{ f.level }}</h2>
          <table>
            <tr class="heading">
              <th>Name</th>
              <th>Score</th>
            </tr>

            <tr v-for="p in f.player.slice(0, 10)" v-bind:key="p.player">
              <th>{{ p.name }}</th>
              <th>{{ p.score }}</th>
            </tr>
          </table>
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
      "https://3000-dfcbe04c-de1f-4c92-97a7-ec5d4aa86552.ws-eu03.gitpod.io/"
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
    cancel: function () {
      this.$emit("playerInputResult", (this.gameState = "frontPage"));
    },

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
    filteredLevel: function () {
      let filtered = this.levels.filter((eachLevel) => {
        return eachLevel.level.includes(this.level);
      });
      if (filtered.length > 0) {
        filtered[0].player.sort(function (a, b) {
          return b.score - a.score;
        });
      }

      return filtered;
    },
  },
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

#highscore,
h2 {
  text-align: center;
  font-family: "VT323", monospace;
  font-size: 35px;
}

ul li {
  list-style-type: none;
}

button {
  border: 2px black solid;
  border-radius: 50px;
  margin-left: 5px;
}

table {
  background-color: hsla(0, 100%, 90%, 0.3);
  font-family: "VT323", monospace;
  font-size: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 2px black solid;
  width: 60vw;
}

tr {
  border: 1px solid black;
}
</style>