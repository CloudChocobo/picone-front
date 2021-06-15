<!-- navigation bar with the addition of the eraser-->
<template>
  <div class="HorizontalBarV2">
    <!-- <UserParameter></UserParameter> -->
    <BackButton></BackButton>
    <Eraser @click="cancelLastAction"></Eraser>
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

.BackButton {
  width: 8%;
  margin-top: 1%;
  margin-bottom: 1%;
  /* margin-left: 3%; */
  /* margin-top: 2%; */
}

.Eraser {
  width: 5%;
  /* margin-left: 3%; */
  /* margin-top: 5px; */
}

.MoodState {
  width: 6%;
  /* margin-right: 1%; */
  /* margin-top: 5px; */
}

</style>