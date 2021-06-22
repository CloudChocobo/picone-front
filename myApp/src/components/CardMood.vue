<!-- we used this component to display a "mood card" and put the selected icon in the top bar-->
<template>
  <div>
    <ImageGrid>
      <div class="moodCard">
        <div :id="id">
          <div><img :src="image" /></div>
          <div class="description">{{ description }}</div>

          <button @click="displayMoodOnDiscussion(item.id)"></button>
        </div>
      </div>
    </ImageGrid>
  </div>
</template>

<script>
import ImageGrid from "@/components/ImageGrid.vue";
export default {
  name: "CardMood",
  components: { ImageGrid },
  props: ["id", "description", "image"],

  mounted() {
    //Création de classe pour le défilement
    this.$el.className = "defFriendly";
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Lobster&family=Roboto:ital,wght@0,300;0,400;1,300;1,400&display=swap");

.moodCard {
  font-family: "Fredoka One", cursive;
  color: #518097;
  font-size: 1.5em;
  text-align: center;
  cursor: pointer;
  position: relative;
  top: 2em;
}

.description {
  position: relative;
  top: 0.2em;
  left: 0.4em;
  white-space: nowrap;
}

img {
  max-width: 5.5em;
  border-radius: 1em;
}

@media (max-width: 1300px) {
  .moodCard {
    font-size: 2em;
  }

  .description {
    position: relative;
    top: -0.2em;
    font-size: 0.9em;
  }

  img {
    max-width: 5em;
    border-radius: 1em;
  }
}

@media (min-width: 1300px) and (min-height: 1000px) {
  .moodCard {
    font-size: 2em;
  }

  .description {
    position: relative;
    top: -0.2em;
    font-size: 1.3em;
  }

  img {
    max-width: 7em;
    border-radius: 1em;
  }
}

</style>