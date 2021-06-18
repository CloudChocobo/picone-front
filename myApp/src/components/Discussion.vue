<!-- dialogue box to screen selected cards-->
<template>
  <div class="discussion">
    <div class="text">
      <div class="selection">
        <slot></slot>
      </div>
      <!-- class=end means end of the sentence-->
      <div class="end">
        <Point id="point" @click="() => router.push('/recap')"></Point>
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
    this.router.push("/startTalking");
  },
  setup() {
    const router = useRouter();
    return { router };
  },
};
</script>

 <style scoped>
.discussion {
  width: 100%;
  height: 220px;
  background-color: #ffffff;
  border: 10px solid #8badbe;
  border-radius: 15px;
  position: relative;
  top: 3em;
}

.selection {
  flex: 1 0 auto;
}

.end {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 10%;
}

.text {
  display: flex;
  height: 100%;
}

@media (max-width: 1100px) {
  #point {
    width: 7em;
  }
}
</style>