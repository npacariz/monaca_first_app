<template>
    <v-ons-page>
        <v-ons-toolbar>
             <v-ons-back-button>Wikipedia Search</v-ons-back-button>
            <div class="center">{{title}}</div>
        </v-ons-toolbar>
          <div style="margin: 20px auto; width: 320px;" v-if="!wikiText">
            <p>Loading stuff...</p>
             <ons-progress-circular indeterminate></ons-progress-circular>
          </div>
        <div class="center">
          <p style="text-align: center; width: 320px" v-html="wikiText">
          {{article}}
          </p>
        </div>
    </v-ons-page>
</template>
<script>
import { wikiService } from "./services/WikiService.js";

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      wikiText: null
    };
  },
  methods: {},
  computed: {
    article() {
      wikiService.getSingleArticle(this.title).then(response => {
        this.wikiText = response.data.parse.text["*"];
        return;
      });
    }
  }
};
</script>
<style>
</style>