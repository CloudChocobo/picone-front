<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 15%);
  grid-template-rows: repeat(2, 15%);
  justify-content: center;
  margin-top: 2%;
  /* column-gap: 0px; */
  /* Pour 4 colonnes :*/
  /* width: 90%; */
  /* margin-left:7%; */
  /*grid-template-columns:repeat( auto-fit, minmax(200px, 1fr) );*/
  /* margin-right: 3%; */
}
</style>
