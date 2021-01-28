<template>
  <div class="Discussion">
    <div class="Texte">
      <div class="Selection">
        <slot></slot>
      </div>
      <div class="fin">
        <Point 
        @click="() => router.push('/recapitulatif')"></Point>
     
      </div>
    </div>
  </div>
</template>

<script>
import Point from "@/components/Point.vue";

import { useRouter } from "vue-router";
export default {
  name: "Discussion",
  components: { 
    Point,
    },
    methodRouter() {
      this.router.push("/debutPhrase");
    },
  setup() {
    const router = useRouter();
    return { router };
  },
};


</script>



 <!-- css a revoir pour le placement   -->
    <style scoped>
.Discussion {
  width: 90%;
  height: 220px;
  background-color: #ffffff;
  border: 10px solid #8badbe;
  border-radius: 15px;
  position:absolute;
  bottom: 0;
  margin-bottom: 5px;
}
.Selection {
  position: absolute;
  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-template-rows: repeat(2, 1fr); */
  /* width: 45%; */
  /* height: 20%; */
  /* gap: 10px; */
}

.texte {
  width: 10%;
}

.fin {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: -10px;
  /* gap: 5px; */
}

.Point {
  width: 10%;
  margin-top: 10%;
  margin-right: 2%;
}

.Interrogation {
  width: 10%;
  margin-top: 1%;
  margin-right: 2%;
}
</style>