<!-- we used this component to represent one icon and label in the grid; each card is clickable  and can be added in the dialogue box-->
<template>
  <div>
    <ImageGrid>
    <div class="card" v-on:click="addItemToDialogBox(card)">
      <div :id="id">
        <div><img :src="image" /></div>
        <div class="description">{{ description }} </div>
      </div>
    </div>
  </ImageGrid>
  </div>

</template>

<script>
import ImageGrid from "@/components/ImageGrid.vue";
export default {
  name: "Card",
  components: {ImageGrid},
  props: ["id", "description", "image"],

  methods: {
    addItemToDialogBox(card) {
      this.$emit("addItemToDialogBox", card);
    },
  },
};
</script>

<style scoped>

/* /////////////////////////::  PC ::////////////////////////////////////////// */

@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Lobster&family=Roboto:ital,wght@0,300;0,400;1,300;1,400&display=swap");

.card {
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
  /* width: 80%; */
  /* width: 150px;
  height: 150px; */
  border-radius: 5%;
/* object-fit:cover; */
}
</style>
