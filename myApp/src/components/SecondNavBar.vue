<!-- navigation bar with the addition of the eraser-->
<template>
  <div class="HorizontalBarV2">
    <!-- <UserParameter></UserParameter> -->
    <div class="nav">
    <BackButton></BackButton>
    <Eraser @click="cancelLastAction"></Eraser>
    </div>
    <Defilement class="centeringDefilement"/>
    <MoodState/>
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
        // Test to save "MoodState" on refresh / Not working currently...
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
  /* height: 90px; */
  /* width: 100%; */
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #8badbe;
  /* align-content: space-between; */
}

/* .HorizontalBarV2 {
  height: 90px;
  width: 100%;
  display: flex;
  background-color: #8badbe;
} */

/* .UserParameter {
  width: 8%;
  margin-left: 1%;
  margin-top: 5px;
} */

/* .UserParameter :hover {
  transform: scale(1.2);
  border-radius: 25px;
  border: 10px solid #202abb9d;
} */

/* img :hover {
  transform: scale(1.2);
  border-radius: 55px;
  border: 10px solid #202abb9d;
} */

.nav {
  display: inline-flex;
  align-items: center;
}

.BackButton {
  width: 7em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  /* margin-left: 3%; */
  /* margin-top: 2%; */
}

.Eraser {
  width: 4.5em;
  /* margin-left: 3%; */
  /* margin-top: 5px; */
}

.defContainer {
  margin-left: -5em;
  padding-right: 5em;
}

.MoodState {
  width: 5em;
  /* margin-right: 1%; */
  /* margin-top: 5px; */
}

</style>