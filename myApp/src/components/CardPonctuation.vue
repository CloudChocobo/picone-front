<!-- we used this component to represent one icon and label in the grid; each card is clickable  and can be added in the dialogue box-->
<template>
  <div>
    <ImageGrid>
      <div class="card" v-on:click="addItemToDialogBox(card)">
        <div :id="id">
          <div><img :src="rootIMG + image" /></div>
        </div>
      </div>
    </ImageGrid>
  </div>
</template>

<script>
import {rootHebergementImage} from "@/data.ts";
import ImageGrid from "@/components/ImageGrid.vue";
export default {
  name: "CardPonctuation",
  components: { ImageGrid },
  props: ["id", "image"],

    data: () => {
    return {
      rootIMG: rootHebergementImage,
    };
  },

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

@media (max-width: 1300px) {
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

@media (min-width: 1300px) and (min-height: 1000px) {
  .card {
    font-size: 1.8em;
    top: 0em;
  }

  .description {
    position: relative;
    top: -0.3em;
    font-size: 1.3em;
  }

  img {
    max-width: 7em;
    border-radius: 1em;
  }
}

</style>
