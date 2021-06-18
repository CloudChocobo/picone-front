<template>
  <div>
    <div class="rectangle_discussion">
      <Discussion>
        <div class="cards">
          <slot></slot>
        </div>
      </Discussion>
    </div>
  </div>
</template>

<script>
import Discussion from "@/components/Discussion.vue";
export default {
  name: "Basket",
  components: { Discussion },
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(4, 150px);
  position: relative;
  top: 1em;
  gap: 15px;
  justify-content: center;
}

@media (max-width: 1100px) {
  .cards {
    top: 1.5em;
    gap: 0;
  }
}
</style>