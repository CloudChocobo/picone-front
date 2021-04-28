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
.card {
  font-size: 23px;
  font-weight: bold;
  color: #536974;
  text-align: center;
  cursor: pointer;
}
.description{
  margin-top:-5px;
}
img {
  width: 150px;
  height: 150px;
  border-radius: 55px;
/* object-fit:cover; */
}
</style>
