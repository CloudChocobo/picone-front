<template>
  <div class="grid">
    <slot></slot>

  </div>
</template>

<style scoped>
/* /////////////////////////::  PC ::////////////////////////////////////////// */

.grid {
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(1, 150px);
  grid-column-gap: 1%;
  grid-row-gap: 10%;
  /* margin-top: 4px; */
  /* margin-left: 15%; */
}

/* /////////////////////////::  OLD ::////////////////////////////////////////// */

/* .grid {
  display: grid;
  grid-template-columns: repeat(4, 150px);
  grid-template-rows: repeat(2, 150px);
  grid-column-gap: 15px;
  grid-row-gap: 45px;

} */
</style>
