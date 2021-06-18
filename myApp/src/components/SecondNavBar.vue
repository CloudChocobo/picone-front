<!-- navigation bar with the addition of the eraser-->
<template>
  <div class="HorizontalBarV2">
    <!-- <UserParameter></UserParameter> -->
    <div class="nav">
      <BackButton></BackButton>
      <Eraser @click="cancelLastAction"></Eraser>
    </div>
    <Defilement class="centeringDefilement" />
    <MoodState />
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import Eraser from "@/components/Eraser.vue";
// import UserParameter from "@/components/UserParameter.vue";
import Defilement from "@/components/Defilement.vue";
import MoodState from "@/components/MoodState.vue";
import { useRouter } from "vue-router";
export default {
  name: "HorizontalBarV2",
  components: { BackButton, Eraser, Defilement, MoodState },

  data: () => {
    return {
      mood: [],
    };
  },

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
.HorizontalBarV2 {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #8badbe;
}

.nav {
  display: inline-flex;
  align-items: center;
}

.BackButton {
  width: 7em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.Eraser {
  width: 4.5em;
}

.defContainer {
  margin-left: -5em;
  padding-right: 5em;
}

.MoodState {
  position: relative;
  top: 0.1em;
  width: 5em;
  margin-left: -3em;
}
</style>