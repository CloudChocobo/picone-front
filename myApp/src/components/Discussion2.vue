    
    <!-- View obsolete à supprimer -->


<!-- dialogue box to screen selected cards-->
<template>
  <div class="Discussion">
    <div class="text">
      <div class="Selection">
        <slot></slot>
      </div>
      <!-- class=end means end of the sentence-->
      <div class="end"> 
        <Point @click="() => router.push('/recapDiscussion')"></Point>
      </div>
    </div>
  </div>
</template>

<script>
import Point from "@/components/Point.vue";

import { useRouter } from "vue-router";
export default {
  name: "Discussion2",
  components: { 
    Point,
    },
    methodRouter() {
      this.router.push("/startTalking");
    },
  setup() {
    const router = useRouter();
    return { router };
  },
};
</script>

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
  flex:1 0 auto;
}

.end {
  display: flex;
  flex-direction: column;
  justify-content:center;
  flex:0 0 10%;
}

.text {
	display:flex;
	height: 100%;
}
</style>