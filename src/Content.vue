<template>
    <v-ons-page>
        <v-ons-toolbar>
             <v-ons-back-button>{{title}}</v-ons-back-button>
            <div class="center">Content2</div>
        </v-ons-toolbar>
        <p style="text-align: center">
            Some Content
        </p>
    </v-ons-page>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Back"
    }
  },
  data() {
    return {};
  }
};
</script>
