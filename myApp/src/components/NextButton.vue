<template>
  <div class="NextButton" @click="() => router.go(+1)">
    <img src="../assets/Next.png" alt="" />
    <div class="label">{{ label }}</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "NextButton",
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

/* MODIF */
img:hover {
  transform: scale(1.2);
  border-radius: 10px;
  border: 5px solid #202abb9d;
}
/* MODIF */
</style>