
<template>
  <div>
    <GrilleImage>
    <!-- <div class="container"> -->

    <div class="cartes">
      <div :id="id">
        <img :src="image" />
        {{ description }}
        <button v-on:click="addItemToPanier(carte)"></button>
      </div>
    </div>
  <!-- </div> -->
  </GrilleImage>
  </div>

</template>

<script>
import GrilleImage from "@/components/GrilleImage.vue";
export default {
  name: "Carte",
  components: {GrilleImage},
  props: ["id", "description", "image"],

  methods: {
    addItemToPanier(carte) {
      this.$emit("addItemToPanier", carte);
    },
  },
};
</script>

<style scoped>

.cartes description {
  font-size: 20px;
}

img {
  /* text-align: center; */
  /* align-items: row; */
  /* display: inline-block; */
  width: 55%;
  
}



</style>
