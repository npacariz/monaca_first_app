<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center">{{title}}</div>
            <div class="right">
                <v-ons-button @click="push">
                  Next              
                </v-ons-button>
            </div>
        </v-ons-toolbar>
        <div class="center">
            <p style="text-align: center">
                 <v-ons-input placeholder="Search wikipedia" float
                v-model="query"
                >
                </v-ons-input>
                <v-ons-button @click="searchWiki">Search</v-ons-button>
            </p>
        </div>
    </v-ons-page>
</template>
<script>
import { wikiService } from "./services/WikiService.js";
import Content from "./Content";
export default {
  data() {
    return {
      title: "Home",
      query: ""
    };
  },
  methods: {
    push() {
      this.$emit("push-page", {
        extends: Content,
        onsNavigatorProps: { title: this.title }
      });
    },
    searchWiki() {
      wikiService.getResults(this.query).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>
