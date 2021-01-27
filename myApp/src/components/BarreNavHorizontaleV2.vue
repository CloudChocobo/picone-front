
<template>
  <div class="BarreHorizontaleV2">
              <MenuBurger></MenuBurger>
          <Gomme @click="cancelLastAction"></Gomme>
          <BackButton></BackButton>
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue"
import Gomme from "@/components/Gomme.vue"
import MenuBurger from "@/components/MenuBurger.vue"
import { useRouter } from "vue-router";
export default {
  name: "BarreHorizontaleV2",
components:{BackButton,Gomme,MenuBurger,},
  methods: {
    cancelLastAction(){
      this.$emit("cancelLastAction")

    }
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
  background-color: #8badbe;
}
</style>