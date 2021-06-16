<!-- back to the previous page -->
<template>
  <div class="backButtonEraser" @click="() => router.go(-1)">
    <div>
    <img src="../assets/Back.png"  alt="" />
    </div>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "BackButtonEraser",
  props: ["label", "id", "description", "image"],

  mounted(){
    this.$el.childNodes[0].className = "defFriendly";
    // this.$el.className = "Eraser defFriendly";
  },

  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>


<style scoped>

</style>