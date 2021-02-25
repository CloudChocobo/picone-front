<!-- correspond à 1 image et 1 label-->
<template>
  <div>
    <ImageGrid>
    <!-- <div class="container"> -->

    <div class="cartes">
      <div :id="id">
        <div><img :src="image" /></div>
        <div class="description">{{ description }} </div>
        <button v-on:click="addItemToPanier(carte)"></button>
      </div>
    </div>
  <!-- </div> -->
  </ImageGrid>
  </div>

</template>

<script>
import ImageGrid from "@/components/ImageGrid.vue";
export default {
  name: "Carte",
  components: {ImageGrid},
  props: ["id", "description", "image"],

  methods: {
    addItemToPanier(carte) {
      this.$emit("addItemToPanier", carte);
    },
  },
};
</script>

<style scoped>

.cartes {
  font-size: 23px;
  font-weight: bold;
  color: #536974;
  text-align: center;
}

.description{
  margin-top:-5px;
}

img {
  /* width: 100%; */
  width: 150px;
  height: 150px;
  border-radius: 55px;
  object-fit:cover;
}

/* img :hover {
  transform: scale(1.2);
  border-radius: 55px;
  border: 10px solid #202abb9d;
} */

</style>
