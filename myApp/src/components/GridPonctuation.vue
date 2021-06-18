<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(1, 150px);
  grid-column-gap: 1%;
  grid-row-gap: 10%;
}
</style>
