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
          var : "defFriendly"
        };
      },

      mounted() {
        this.$el.classList.add("defFriendly");
      },



      computed: {
        currentDef() {
          return this.$store.state.stateDefilement.currentDefilement;
        },

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

>>> .selected button{
  transform: scale(1.2);
  border-radius: 55px;
  border: 10px solid #202abb9d;
}
</style>

