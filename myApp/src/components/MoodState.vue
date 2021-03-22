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
    return console.log("MOOD >>"+ JSON.stringify(this.moodToDisplay));
  },

  computed: {
    moodToDisplay() {
      return this.$store.state.mood[0];
    }
  }
};
</script>

<style scoped>

</style>