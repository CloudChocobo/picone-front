<!-- leftnav bar  administrateur-->
<template>
  <div class="LeftNavBar">
    <UserParameter></UserParameter>
  </div>
</template>

<script>
import UserParameter from "@/components/UserParameter.vue";
export default {
  name: "LeftNavBar",
  components: { UserParameter },
};
</script>

    <style scoped>
.LeftNavBar {
  position: absolute;
  width: 20vw;
  background: #8badbe;
  height: 100%;
  max-width: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-wrap: column;
}
.UserParameter {
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  flex-wrap: column;
  justify-content: center;
}
</style>

