<!-- we used this component to represent one icon and label in the grid; each card is clickable  and can be added in the dialogue box-->
<template>
  <div>
    <ImageGrid>
      <div class="card" v-on:click="addItemToDialogBox(card)">
        <div :id="id">
          <div><img :src="image" /></div>
          <div class="description">{{ description }}</div>
        </div>
      </div>
    </ImageGrid>
  </div>
</template>

<script>
import ImageGrid from "@/components/ImageGrid.vue";
export default {
  name: "Card",
  components: { ImageGrid },
  props: ["id", "description", "image"],

  methods: {
    addItemToDialogBox(card) {
      this.$emit("addItemToDialogBox", card);
    },
  },
};
</script>

<style scoped>
.card {
  font-family: "Fredoka One", cursive;
  color: #518097;
  font-size: 1.4em;
  text-align: center;
  cursor: pointer;
  position: relative;
  top: 1em;
}

.description {
  position: relative;
  top: 0.2em;
  white-space: nowrap;
}

img {
  max-width: 5.5em;
  border-radius: 1em;
}

@media (max-width: 1100px) {
  .card {
    /* max-height: 5em; */
    font-size: 1.8em;
    top: 0em;
  }

  .description {
    position: relative;
    top: -0.3em;
    font-size: 0.9em;
  }

  img {
    max-width: 5em;
    border-radius: 1em;
  }
}
</style>
