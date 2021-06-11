<!-- horizontal navigation bar with only the back button and the user parameter icon for the speed--> 
<template> 
  <div class="FirstNavBar">
    <!-- <UserParameter></UserParameter> -->
    <BackButton></BackButton>
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
// import UserParameter from "@/components/UserParameter.vue";
import { useRouter } from "vue-router";
export default {
  name: "FirstNavBar",
  components: { BackButton},

  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>

<style scoped>

.FirstNavBar {
  height: 7%;
  width: 100%;
  display: flex;
  background-color: #8badbe;
}

.UserParameter {
  width: 8%;
  margin-left: 1%;
  margin-top: 5px;
}

.BackButton {
  width: 8%;
  margin-left: 3%;
  margin-top: 1%;
  margin-bottom: 1%;
  visibility: hidden;
}

</style>