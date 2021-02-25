<template>
  <div class="Eraser">
    <div :id="id">
      <img src="../assets/gomme.png" alt="Gomme" />

      <button @click="removeItemFromDialogBox(item.id)"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Eraser",
  props: ["id", "description", "image"],
  methods: {
    //    removeItemFromDialogBox(index) {
    //   this.panier.splice(index, 1);
    // },
    //   removeItemFromDialogBox(carte) {
    //     this.$emit("removeItemFromDialogBox", carte);
    //  }
    //    removeItemFromDialogBox(index) {
    //   this.$panier.dispatch('removeItemFronBasket',itemId);
    // },
  },

  // emoveItemFromBasket(id) {
  //     console.log(id);
  //     if (this.Basket.lenght>1){
  //       this.item.pop()
  //     }
  //   },
};
</script>


<style scoped>

/* img:hover {
  transform: scale(1.2);
  border-radius: 10px;
  border: 5px solid #202abb9d;
} */

</style>