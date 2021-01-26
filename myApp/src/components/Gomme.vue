<template>
  <div class="Gomme" >
     <div :id="id">
       {{ description }}
    <img src="../assets/effacerPhrase.png" alt="" />
              <Carte
                v-for="(carte, index) in panier"
                :image="carte.image"
                :description="carte.description"
                :key="index"
                @click="removeItemFromPanier(index)"
              />
    <button v-on:click="removeItemFromPanier(carte)"></button>
  </div>
  </div>
</template>

<script>

export default {
  name: "Gomme",
  props: ["id","description", "image" ],
 methods: {
       removeItemFromPanier(index) {
      this.panier.splice(index, 1);
    },
  },
  //   removeItemFromPanier(carte) {
  //     this.$emit("removeItemFromPanier", carte);
  //  }
  // methodRemoveItemFromPanier(id) {
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
img {
  display: flex;
  flex-direction: row;
  flex-wrap: row;
  float: left;
  width: 8%;
  margin-left: 10px;
  margin-top: 5px;
}

</style>