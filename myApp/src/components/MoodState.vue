<!-- Placeholder for CardMood in next pages -->
<template>
  <div class="MoodState">
    <!-- On Heroku "imgUrl" => "img_url" / On Localhost => "imgUrl -->
    <img :src="moodToDisplay.imgUrl" />
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
    return console.log("MOOD >>" + JSON.stringify(this.moodToDisplay));
  },

  computed: {
    moodToDisplay() {
      if (this.$store.getters.mood) {
        return this.$store.getters.mood;
        // Avoid error if "mood == null"
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
</style>