
<template>
  <div class="BarreHorizontaleV2">
    <MenuBurger></MenuBurger>
    <BackButton></BackButton>
    <Gomme @click="cancelLastAction"></Gomme>
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import Gomme from "@/components/Gomme.vue";
import MenuBurger from "@/components/MenuBurger.vue";
import { useRouter } from "vue-router";
export default {
  name: "BarreHorizontaleV2",
  components: { BackButton, Gomme, MenuBurger },
  methods: {
    cancelLastAction() {
      this.$emit("cancelLastAction");
    },
  },
  emits: ["cancelLastAction"],
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

.Gomme {
  width: 8%;
  margin-left: 3%;
  margin-top: 5px;
}
</style>