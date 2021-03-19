<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style scoped>

.grid {
  display: grid;
  grid-template-columns: repeat(4, 150px);
  grid-template-rows: repeat(2, 150px);
  margin-top: 4px;
  margin-left: 15%;
  grid-column-gap: 15px;
  grid-row-gap: 45px;
}
</style>
