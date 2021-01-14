<template>
    <ion-item>
      <ion-range min="1" max="3" step="1" snaps="true" color="secondary">
      </ion-range>
    </ion-item>
</template>

<script>
import { IonItem, IonRange } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {  IonItem, IonRange },
  mounted() {
    this.$refs.rangeDualKnobs.value = { lower: 0, upper: 3 };
  }
});
</script>
 <style scoped>

 ion-item{
   display: flex;
  align-self: flex-end;

 }
ion-range{
  --bar-background: #F1FAFF;
  --border-color:#F1FAFF;
  --bar-background-active: #F1FAFF;
  --bar-border-radius: 0px;
  --knob-size: 50px;
  --pin-color: #536974;
  --bar-height: 20px;
  --height: 20px;
  --width: 50px;
}

.range-slider {
  --width: 50px;
}
  </style>