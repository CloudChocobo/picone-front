<!-- suppression à vérifier-->
<template>
  <div class="BarreHorizontale">
    <UserParameter></UserParameter>
    <BackButton></BackButton>

    <NextButton></NextButton>

  </div>
</template>

<script>
import UserParameter from "@/components/UserParameter.vue";
import BackButton from "@/components/BackButton.vue";
import NextButton from "@/components/NextButton.vue";

import { useRouter } from "vue-router";
export default {
  name: "BarreHorizontale",
  components: { UserParameter, BackButton, NextButton},
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
 <!-- css a revoir pour le placement   -->
    <style scoped>
.UserParameter {
  display: flex;
  flex-direction: row;
  flex-wrap: row;
  float: left;
  width: 8%;
  margin-left: 10px;
  margin-top: 5px;
}
.BarreHorizontale {
  height: 90px;
  width: 100%;
  background-color: #8badbe;
}
.NextButton {
  display: inline;
  flex-direction: row;
  flex-wrap: row;
  width: 10%;
  float: right;
  margin-right: 10px;
  justify-content: center;
  margin-top: 20px;
}


.BackButton {
  display: inline-block;
  flex-direction: row;
  flex-wrap: row;
  width: 10%;
  margin-left: 10px;
  justify-content: center;
  margin-top: 20px;
}
</style>
