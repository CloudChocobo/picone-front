<!-- it's to remove item from dialogue box-->
<template>
  <div class="Eraser">

      

      <button @click="removeItemFromDialogBox(item.id)">
        <img src="../assets/gomme.png" alt="Gomme" />
      </button>

  </div>
</template>

<script>
export default {
  name: "Eraser",
  props: ["id", "description", "image"],

  mounted(){
    this.$el.className = "Eraser defFriendly";
  },
};
</script>


<style scoped>

button {
  background-color: #8badbe;
}

</style>