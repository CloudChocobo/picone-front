<!-- Placeholder for CardMood in next pages -->
<template>
  <div class="MoodState">
      <!-- C'est ici que devra etre fait le lien avec CardMood -->
      <!-- On Heroku "imgUrl" => "img_url" / On Localhost => "imgUrl -->
    <img :src="moodToDisplay.imgUrl"/>
  </div>
</template>

<script>
export default {
  name: "MoodState",
  props: [],
  data() {
    return {};
  },
  mounted() {
    // Check of JSON's "MoodState"
    return console.log("MOOD >>"+ JSON.stringify(this.moodToDisplay));
  },

  computed: {
      moodToDisplay() {
      // this.mood = []
        if (this.$store.getters.mood) {
          return this.$store.getters.mood;
      // Avoid error if "mood == null"
      } else {
          return ""
      }
    }

  }
};
</script>

<style scoped>

</style>