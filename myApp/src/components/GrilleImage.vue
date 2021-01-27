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
  margin-top: 2%;
  margin-bottom: -25px;
  margin-left: 0;
  gap: 5px;
  /* column-gap: 10px;
  row-gap: 10px; */
  /* justify-content: center; */
  /* column-gap: 0px; */
  /* Pour 4 colonnes :*/
  /* width: 90%; */
  /* margin-left:7%; */
  /*grid-template-columns:repeat( auto-fit, minmax(200px, 1fr) );*/
  /* margin-right: 3%; */
}
</style>
