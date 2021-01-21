
<template>
  <div class="BarreNavLeft">
    <MenuBurger></MenuBurger>
  </div>
</template>

<script>
import MenuBurger from "@/components/MenuBurger.vue";
export default {
  name: "BarreNavLeft",
  components: { MenuBurger },
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
.MenuBurger {
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  flex-wrap: column;
  justify-content: center;
}
</style>

