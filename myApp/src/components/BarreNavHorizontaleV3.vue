
<template>
  <div class="BarreHorizontaleV3">
    <MenuBurger></MenuBurger>
    <BackButton></BackButton>
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import MenuBurger from "@/components/MenuBurger.vue";
import { useRouter } from "vue-router";
export default {
  name: "BarreHorizontaleV2",
  components: { BackButton, MenuBurger },

  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>

<style scoped>

.BarreHorizontaleV3 {
  height: 90px;
  width: 100%;
    display: flex;
  background-color: #8badbe;
}

.MenuBurger {
  width: 8%;
  margin-left: 1%;
  margin-top: 5px;
}

.BackButton {
  width: 8%;
  margin-left: 3%;
  margin-top: 2%;
}

</style>