<template>
  <div class="BackButton" @click="() => router.go(-1)">
    <img src="../assets/Back.png" alt="" />
    <div class="label">{{ label }}</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "BackButton",
  props: ["label"],
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>


<style scoped>

/* img:hover {
  transform: scale(1.2);
  border-radius: 10px;
  border: 5px solid #202abb9d;
} */

</style>