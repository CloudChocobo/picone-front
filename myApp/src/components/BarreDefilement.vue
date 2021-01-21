<template>
  <div class="container">
    <ion-range min="1" max="3" step="1" snaps="true" color="secondary">
      <ion-label slot="start">lent</ion-label>
      <ion-label slot="end">rapide</ion-label>
    </ion-range>
  </div>
</template>

<script>
import { IonLabel, IonRange } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { IonRange, IonLabel },
});
</script>
 <style scoped>
.container {
  display: flex;
  width: 50%;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-around;
  align-items: space-around;
}

ion-range {
  --bar-background: #f1faff;
  --border-color: #f1faff;
  --bar-background-active: #f1faff;
  --bar-border-radius: 0px;
  --knob-size: 40px;
  --pin-color: #536974;
  --bar-height: 20px;
  --height: 20px;
}

ion-label {
  display: flex;
  font-size: 30px;
  color: #536974;
  flex-direction: row;
  align-content: space-around;
  align-items: space-around;
}

/* .input-wrapper {
  width:50%;
  color: #F1FAFF;
} */
/* .range-slider {
  --width: 50px;
} */
</style>