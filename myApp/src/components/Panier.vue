<template>
  <div>
    <div class="rectangle_discussion">
    <Discussion>
      <div class="cartes">
        <slot></slot>
      </div>
    </Discussion>
    </div>
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

.footer {
  margin-left: 10%;
}
.rectangle_discussion {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
}
/* .rectangle_discussion .Discussion{
  grid-template-rows: fit-content(40%);
} */

.cartes{
      /* position: absolute; */
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-auto-rows: auto;
   width: auto;
}
</style>