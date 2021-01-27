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
  components: { Discussion },
};
</script>

<style scoped>
/* .footer {
  margin-left: 10%;
} */

/* .rectangle_discussion {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
} */

/* .rectangle_discussion .Discussion{
  grid-template-rows: fit-content(40%);
} */
.Discussion {
  margin-left: 50px;
}
.cartes {
  display: grid;
  grid-template-columns: repeat(4, 150px);
  margin-top: 3%;
   gap: 15px;
    /* grid-template-rows: repeat(2, 1fr); */
  /* position: absolute; */
  /* grid-auto-rows: auto; */
  /* width: auto; */
}
</style>