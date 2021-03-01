<!-- dialogue box to screen selected cards-->
<template>
  <div class="Discussion">
    <div class="text">
      <div class="Selection">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

import { useRouter } from "vue-router";
export default {
  name: "Discussion3",
  components: { 
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

.text {
	display:flex;
	height: 100%;
}
</style>