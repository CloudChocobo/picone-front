<!-- back to the previous page -->
<template>
  <div class="exitButton">
    <div>
    <img src="../assets/exit.png"  alt="exit" />
    </div>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "ExitButton",
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