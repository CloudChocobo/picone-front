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