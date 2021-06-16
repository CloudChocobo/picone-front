<template> 
  <div class="homeNavBar">
    <div class="buttonOpacity">
    <ExitButton></ExitButton>
    </div>
  </div>
</template>

<script>
import ExitButton from "@/components/ExitButton.vue";
import { useRouter } from "vue-router";
export default {
  name: "HomeNavBar",
  components: { ExitButton},

  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>

<style scoped>

.homeNavBar {
  height: 7%;
  width: 100%;
  display: flex;
  background-color: #8badbe;
}

.buttonOpacity{
  opacity: 0.80;
}

.exitButton {
  border: 0.3em solid #d2dfe6;
  border-radius: 0.5em;
  width: 3.5em;
  margin-left: 2em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

</style>