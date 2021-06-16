<!-- we used this component to display a "mood card" and put the selected icon in the top bar-->
<template>
    <div>
        <ImageGrid>
            <div class = "moodCard">
                <div :id="id">
                    <div><img :src="image" /></div>
                    <div class="description">{{ description }} </div>

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
  components: {ImageGrid},
  props: ["id", "description", "image"],

  mounted() {
    //Création de classe pour le défilement
    this.$el.className = "defFriendly";

  }
}
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Lobster&family=Roboto:ital,wght@0,300;0,400;1,300;1,400&display=swap");

.moodCard {
  font-family: "Fredoka One", cursive;
  color: #518097;
  font-size: 1.8em;
  text-align: center;
  cursor: pointer;
}
.description{
  margin-top:-5px;
}
img {
  max-width: 4em;
  border-radius: 1em;
}
</style>