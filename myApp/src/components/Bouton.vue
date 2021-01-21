<template>
  <IonButton :color="realCouleur" :router-link="route ? route : null">
    <IonIcon v-if="icone" class="buttonIcon" :icon="iconData"></IonIcon>
    <slot></slot
  ></IonButton>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import * as icons from "ionicons/icons";

export default {
  name: "Bouton",
  props: ["couleur", "route", "icone"],
  components: { IonButton, IonIcon },
  methods: {
    getCouleur: (c) => {
      console.log("c :>> ", c);
      if (c == "vert") {
        return "secondary";
      } else if (c == "blanc") {
        return "white";
      } else return "primary";
    },
  },
  data() {
    return {
      realCouleur: this.getCouleur(this.couleur),
      iconData: this.icone ? icons[this.icone] : null,
    };
  },
};
</script>

<style scoped>
.button {
  --box-shadow: "none";
  width: 100%;
  box-sizing: content-box;
  height: 45px;
  border-radius: 10px;
  overflow: hidden;
  flex: 0 0 auto;
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.3px;
}

.buttonIcon {
  margin-right: 7px;
  height: 16px;
}
</style>

