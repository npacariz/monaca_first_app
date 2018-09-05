<template>
    <v-ons-navigator 
      :page-stack="pageStack"
      @push-page="nextPage"
    >
    </v-ons-navigator>
</template>
<script>
import Home from "./Home";
export default {
  data() {
    return {
      pageStack: [Home]
    };
  },
  methods: {
    nextPage(nextPage) {
      this.pageStack.push(nextPage);
    }
  }
};
</script>
