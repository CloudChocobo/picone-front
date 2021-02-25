<!-- barre nav gauche administrateur-->
<template>
  <div class="BarreNavLeft">
    <UserParameter></UserParameter>
  </div>
</template>

<script>
import UserParameter from "@/components/UserParameter.vue";
export default {
  name: "BarreNavLeft",
  components: { UserParameter },
};
</script>

    <style scoped>
.BarreNavLeft {
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

