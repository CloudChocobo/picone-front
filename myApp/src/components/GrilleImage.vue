
<template>
 <div class="GrilleImage">
      <slot></slot>
 <ion-grid>
  <ion-row>
    <ion-col col-3>This column will take 3 columns</ion-col>
  </ion-row>
  <ion-row>
    <ion-col col-4>This column will take 4 columns</ion-col>
  </ion-row>
</ion-grid>


    
       
    </div>
</template>

<script>


    export default {
        name: "GrilleImage",
        props: [],
        data() {
            return {};
        },
    };
</script>

<style scoped>

</style>
