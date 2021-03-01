<template>
  <div>
    <div class="rectangle_discussion">
      <Discussion3>
        <div class="cards">
          <slot></slot>
        </div>
      </Discussion3>
    </div>
  </div>
</template>

<script>
import Discussion3 from "@/components/Discussion3.vue";
export default {
  name: "Basket3",
  components: { Discussion3 },
};
</script>

<style scoped>
.Discussion {
  margin-left: 50px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(4, 150px);
   gap: 15px;
}
</style>