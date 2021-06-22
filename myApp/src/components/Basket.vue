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

@media (max-width: 1300px) {
  .cards {
    top: 1.5em;
    gap: 0;
  }
}

@media (min-width: 1300px) and (min-height: 1000px) {
  .cards {
    top: 2em;
    gap: 4em;
  }
}
</style>