<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Emissions/>
    </v-content>
  </v-app>
</template>

<script>
import Emissions from './components/Emissions'
import csvtojson from "csvtojson";
import axios from "axios";

export default {
  name: "app",
  data: () => ({}),
  async created() {
    const jsonArray = await axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://snowcoding.com/reaktor/emission.csv"
      )
      .then(result => result.data);
    console.log(jsonArray);
  }
};

export default {
  name: 'App',
  components: {
    Emissions
  },
  data () {
    return {
      //
    }
  }
}
</script>
