    
    <!-- Component obsolete à supprimer -->



<template>
  <div>
    <div class="rectangle_discussion">
      <Discussion2>
        <div class="cards">
          <slot></slot>
        </div>
      </Discussion2>
    </div>
  </div>
</template>

<script>
import Discussion2 from "@/components/Discussion2.vue";
export default {
  name: "Basket2",
  components: { Discussion2 },
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