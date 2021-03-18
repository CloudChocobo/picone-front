<template>
	<div class="defilementComponent">
    <button
        :class="{
                selected: current === 0,
              }">Slow</button>
    <button
        :class="{
                selected: current === 1,
              }">Normal</button>
    <button
        :class="{
                selected: current === 2 ,
              }">Fast</button>
    <br>

  </div>
</template>

<script>
    export default {
      name: "",
      methods: {

        },

        data() {
          return {

          };
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

.selected {
  transform: scale(1.2);
  border-radius: 55px;
  border: 10px solid #202abb9d;
}
</style>

