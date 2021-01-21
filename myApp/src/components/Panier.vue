<template>
  <div>
    <Discussion>
      <div class="cartes">
        <slot></slot>
      </div>
    </Discussion>
  </div>
</template>

<script>
import Discussion from "@/components/Discussion.vue";
export default {
  name: "Panier",
  components: {Discussion},
};
</script>

<style scoped>
</style>