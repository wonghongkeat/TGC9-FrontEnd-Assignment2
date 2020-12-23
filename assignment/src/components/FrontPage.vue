<template>
  <div class="assignment">
    <div>
      <h1>Shoot The Ducks!</h1>
    </div>
    <div>
      <button>New game</button>
      <button>Highscore</button>
    </div>
    <div>
      <div class="highscore">
        <h2 id="highscore">Highscore</h2>
        <div v-for="f in levels" v-bind:key="f._id">
          <ul>
            <li>level: {{ f.level }}</li>
            <li>
                <ul v-for="p in f.player" v-bind:key="p.player">
                    <li> {{p.name}}: {{p.score}}</li>
                    </ul>
            </li>
            <button>x</button>
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

    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

h1 {
  text-align: center;
  font-family: "VT323", monospace;
  font-size: 80px;
}

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

.assignment {
  text-align: center;
}
</style>


