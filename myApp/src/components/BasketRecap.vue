<template>
  <div>
    <div class="rectangle_discussion">
      <DiscussionRecap>
        <div class="cards">
          <slot></slot>
        </div>
      </DiscussionRecap>
    </div>
  </div>
</template>

<script>
import DiscussionRecap from "@/components/DiscussionRecap.vue";
export default {
  name: "BasketRecap",
  components: { DiscussionRecap },
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