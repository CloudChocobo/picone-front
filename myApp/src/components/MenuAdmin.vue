<template>
  <ion-menu
    side="start"
    menu-id="custom"
    class="my-custom-menu"
    content-id="main"
  >
    <ion-header>
      <ion-toolbar>
        <BackButton></BackButton>
        <ion-title>Paramètres</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ButtonMenu route="/patients" label="Ajouter un patient"></ButtonMenu>
        <ButtonMenu
          route="/establishment"
          label="Ajouter un établissement"
        ></ButtonMenu>
        <div class="inactive">
          <ButtonMenu route="" label="Ajouter un mot"></ButtonMenu>
          <ButtonMenu route="" label="Affichage et Luminosité"></ButtonMenu>
          <ButtonMenu route="" label="Fond d'écran et Police"></ButtonMenu>
          <ButtonMenu route="" label="Personnalisation photos"></ButtonMenu>
          <ButtonMenu route="" label="Blog"></ButtonMenu>
          <ButtonMenu route="" label="À propos"></ButtonMenu>
        </div>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-router-outlet id="main"></ion-router-outlet>
</template>


<script>
import {
  IonContent,
  IonHeader,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  menuController,
} from "@ionic/vue";
import BackButton from "@/components/BackButton.vue";
import ButtonMenu from "@/components/ButtonMenu.vue";

export default {
  name: "MenuAdmin",
  components: {
    IonContent,
    IonHeader,
    IonList,
    IonMenu,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
    BackButton,
    ButtonMenu,
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
};
</script>

<style scoped>
ion-toolbar {
  color: #536974;
  background: #8badbe;
}
ion-title {
  color: #536974;
  font-weight: bold;
  background: #8badbe;
  margin-bottom: 0.5em;
}

.BackButton {
  width: 3em;
  margin: 1em auto 0.5em 1.3em;
}

.inactive {
  opacity: 50%;
}

.input-wrapper {
  color: #536974;
  background: #8badbe;
}
.my-custom-menu {
  --width: 300px;
}
</style>