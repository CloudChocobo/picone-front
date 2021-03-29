<template>
  <ion-button color="light">
    <slot></slot>
  </ion-button>
</template>

<script>
import { IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonButton }
});
</script>
<style scoped>
.ion-button {
display: flex;
flex-direction: row;
}
</style>