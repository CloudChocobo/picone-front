<!-- it's to remove item from dialogue box-->
<template>
  <div class="Eraser">

      <img src="../assets/gomme.png" alt="Gomme" />

      <button @click="removeItemFromDialogBox(item.id)"></button>

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


</style>