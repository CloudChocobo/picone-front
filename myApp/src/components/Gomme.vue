<template>
  <div class="Gomme">
    <div :id="id">
      <img src="../assets/gomme.png" alt="gomme" />

      <button @click="removeItemFromPanier(item.id)"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gomme",
  props: ["id", "description", "image"],
  methods: {
    //    removeItemFromPanier(index) {
    //   this.panier.splice(index, 1);
    // },
    //   removeItemFromPanier(carte) {
    //     this.$emit("removeItemFromPanier", carte);
    //  }
    //    removeItemFromPanier(index) {
    //   this.$panier.dispatch('removeItemFronPanier',itemId);
    // },
  },

  // emoveItemFromPanier(id) {
  //     console.log(id);
  //     if (this.Panier.lenght>1){
  //       this.item.pop()
  //     }
  //   },
};
</script>


<style scoped>
/* MODIF */
img:hover {
  transform: scale(1.2);
  border-radius: 10px;
  border: 5px solid #202abb9d;
}
/* MODIF */
/* img {
  display: flex;
  flex-direction: row;
  flex-wrap: row;
  float: left;
  width: 8%;
  margin-left: 10px;
  margin-top: 5px;
} */
</style>