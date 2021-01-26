
<template>
  <div class="MenuBurger">
    <img src="../assets/IconeMenu.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "MenuBurger",
  props: [],
  data() {
    return {};
  },
};
</script>

<style scoped>
.MenuBurger {
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  border-radius: 50%;
  align-items: center;
}

/* MODIF */
img:hover {
  transform: scale(1.2);
  border-radius: 25px;
  border: 5px solid #202abb9d;
}
/* MODIF */
</style>

