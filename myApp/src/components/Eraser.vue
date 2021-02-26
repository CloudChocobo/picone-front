<!-- it's to remove item from dialogue box-->
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
};
</script>


<style scoped>
</style>