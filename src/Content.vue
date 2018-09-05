<template>
    <v-ons-page>
        <v-ons-toolbar>
             <v-ons-back-button>Wikipedia Search</v-ons-back-button>
            <div class="center">{{title}}</div>
        </v-ons-toolbar>
        <p style="text-align: center" v-html="wikiText">
         {{article}}
        </p>
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
        return (this.wikiText = response.data.parse.text["*"]);
      });
    }
  }
};
</script>
