
<template>
<div class="grid">
    <slot></slot>
</div>
</template>

<style scoped>
.grid{
  display:grid;
  /* Pour 4 colonnes :*/
  grid-template-columns:repeat(4, 1fr ); 
  grid-template-rows:repeat(2, 1fr );
  /*grid-template-columns:repeat( auto-fit, minmax(200px, 1fr) );*/
  }
  </style>
