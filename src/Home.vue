<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center">{{title}}</div>
        </v-ons-toolbar>
        <div class="center">
            <p style="text-align: center">
                 <v-ons-input placeholder="Search wikipedia" float
                v-model="query"
                >
                </v-ons-input>
                <v-ons-button @click="searchWiki">Search</v-ons-button>
            </p>
            <div v-if="listOfArticles.length > 0">
              <v-ons-list >
                <v-ons-item v-for="article in listOfArticles" :key="article.pageid">
                    <h2>{{article.title}}</h2>
                    <p v-html="article.snippet"></p>
                    <v-ons-button @click="push(article.title)">Read article</v-ons-button>
                </v-ons-item>
              </v-ons-list>
            </div>
        </div>
    </v-ons-page>
</template>
<script>
import { wikiService } from "./services/WikiService.js";
import Content from "./Content";
export default {
  data() {
    return {
      title: "Search Wikipedia",
      query: "",
      listOfArticles: []
    };
  },
  methods: {
    push(title) {
      this.$emit("push-page", {
        extends: Content,
        onsNavigatorProps: { title: title }
      });
    },
    searchWiki() {
      wikiService.getResults(this.query).then(response => {
        this.listOfArticles = response.data.query.search;
        this.query = "";
      });
    }
  }
};
</script>

