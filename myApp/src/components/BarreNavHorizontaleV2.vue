
<template>
  <div class="BarreHorizontaleV2"></div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "BarreHorizontaleV2",

  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>

<style scoped>
.BarreHorizontaleV2 {
  height: 90px;
  width: 100%;
  background-color: #8badbe;
}
</style>