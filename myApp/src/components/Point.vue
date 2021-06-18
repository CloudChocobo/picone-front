<template>
  <div>
    <img src="../assets/affirmation.png" />
  </div>
</template>

<script>
export default {
  name: "Point",
  props: [],
  methods: {},

  mounted() {
    this.$el.classList.add("defFriendly");
  },
};
</script>

<style scoped>
.Point {
  cursor: pointer;
}

>>> .selected img {
  transform: scale(1.2);
  border-radius: 55px;
  border: 10px solid #202abb9d;
}
</style>

