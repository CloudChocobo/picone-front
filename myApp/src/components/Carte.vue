
<template>
  <div>
    <div class="cartes">
      <div  :id={id}>
        {{ description }}
        <img :src={image} />
        <button v-on:click="addItemToPanier(carte)"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carte",
  props: ["id", "description", "image"],

  methods: {
    addItemToPanier(carte) {
      this.$emit("addItemToPanier", carte);
    },
  },
};
</script>

<style scoped></style>
