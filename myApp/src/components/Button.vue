<template>
  <IonButton>
    <IonIcon v-if="icone" class="buttonIcon" :icon="iconData"></IonIcon>
    <slot></slot
  ></IonButton>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import * as icons from "ionicons/icons";

export default {
  name: "Button",
  props: ["couleur", "route", "icone"],
  components: { IonButton, IonIcon },
};
</script>

<style scoped>
.button {
  width: 50%;
  box-sizing: content-box;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.3px;
  color:#536974
}

.buttonIcon {
  margin-right: 7px;
  height: 16px;
}
</style>