<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 110px);
  grid-template-rows: repeat(1, 110px);
  grid-column-gap: 3%;
  grid-row-gap: 10%;
}

@media (max-width: 1300px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 180px);
    grid-template-rows: repeat(2, 150px);
    grid-column-gap: 3%;
    grid-row-gap: 15%;
    margin-right: 6em;
    margin-left: 2.3em;
  }  
}

@media (min-width: 1300px) and (min-height: 1000px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 230px);
    grid-template-rows: repeat(2, 230px);
    grid-column-gap: 3%;
    grid-row-gap: 15%;
    margin-right: 6em;
    margin-left: 2.3em;
  }
}
</style>
