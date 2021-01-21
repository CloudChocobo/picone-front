<template>
  <!-- <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Paramètres</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Navigation</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu> -->

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
    </ion-content>
  </ion-menu>

  <!-- <ion-menu side="end" type="push" content-id="main">
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title>End Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu> -->

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
</style>