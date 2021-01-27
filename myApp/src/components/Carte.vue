
<template>
  <div>
    <GrilleImage>
    <!-- <div class="container"> -->

    <div class="cartes">
      <div :id="id">
        <div><img :src="image" /></div>
        <div>{{ description }} </div>
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

.cartes {
  font-size: 30px;
  font-weight: bold;
  color: #536974;
  text-align: center;
  overflow: hidden;
}

img {
  width: 100%;
  object-fit:cover;
}

img :hover {
  transform: scale(1.2);
  border-radius: 55px;
  border: 10px solid #202abb9d;
}

</style>
