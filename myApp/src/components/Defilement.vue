<template>
	<div>
    <button>Slow</button>
    <button>Normal</button>
    <button>Fast</button>
  </div>
</template>

<script>
    export default {

      name: "",
      methods: {},

      data() {
        return {
          };
      },

      mounted() {

        for (let i = 0; i < this.$el.children.length; i++) {
          this.$el.children[i].classList.add("defFriendly");
        }


         },






    }
</script>

<style scoped>

button {
  color: white;
  background: orange;
  border: none;
  padding: 10px;
  font-weight: 300;
  font-size: 1.2em;
  font-family: 'Lato';
}

>>> .selected {
  transform: scale(1.2);
  border-radius: 55px;
  border: 10px solid #202abb9d;
}
</style>

