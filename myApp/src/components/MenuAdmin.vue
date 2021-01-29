<template>

  <ion-menu
    side="start"
    menu-id="custom"
    class="my-custom-menu"
    content-id="main"
  >
    <ion-header>
      <ion-toolbar>
        <ion-title>Paramètres</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      
      <ion-list>
        <ion-item>Profil Patient</ion-item>
        <ion-item>Vitesse</ion-item>
        <ion-item>Affichage et Luminosité</ion-item>
        <ion-item>Fond d'écran et Police</ion-item>
        <ion-item>Configuration Tuiles</ion-item>
        <ion-item>Personnalisation photos</ion-item>
      </ion-list>
    <BackButton></BackButton>
    </ion-content>
  </ion-menu>

  <ion-router-outlet id="main"></ion-router-outlet>
</template>


<script>
import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  menuController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import BackButton from "@/components/BackButton.vue";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
    BackButton,
  },
  methods: {
    openFirst() {
      menuController.enable(true, "first");
      menuController.open("first");
    },
    openEnd() {
      menuController.open("end");
    },
    openCustom() {
      menuController.enable(true, "custom");
      menuController.open("custom");
    },
  },
});
</script>

<style scoped>
ion-toolbar {
  color: #536974;
  background: #8badbe;
}
ion-title {
  color: #536974;
  background: #8badbe;
}

.input-wrapper {
  color: #536974;
  background: #8badbe;
}
.my-custom-menu {
  --width: 300px;
}

.BackButton {
width: 30%;
margin-top:7%;
margin-left:30%;
}

</style>