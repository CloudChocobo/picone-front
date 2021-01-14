<template>
  <ion-list>
    <ion-item>
      <ion-range min="1" max="3" step="1" snaps="true" color="secondary"></ion-range>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonItem, IonList, IonRange } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {  IonItem, IonList, IonRange },
  mounted() {
    this.$refs.rangeDualKnobs.value = { lower: 0, upper: 3 };
  }
});
</script>
 <style scoped>
 .knob{
   background-color: blue;
 }
 .item-native{
   background-color: white;
 }
.tick{
  /* color:  */
}
  .range-bar{
/* backgr */
  }
  </style>