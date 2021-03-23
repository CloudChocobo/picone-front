<!-- back to the previous page -->
<template>
  <div class="BackButton" @click="() => router.go(-1)">
    <div>
    <img src="../assets/Back.png"  alt="" />
    </div>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "BackButton",
  props: ["label"],

  mounted(){
    this.$el.childNodes[0].className = "defFriendly";
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