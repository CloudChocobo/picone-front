<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageAdmin>
        <ion-header>
          <ion-toolbar>
            <ion-buttons side="start">
              <ion-menu-button></ion-menu-button>
              <BackButton></BackButton>
              <ion-title></ion-title>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <div class="text">
          <p>Bienvenue dans les paramètres</p>
        </div>
        <div class="image">
          <img src="../assets/boutonMenu.png" alt="" />
        </div>
      </PageAdmin>
    </ion-content>
  </ion-page>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import PageAdmin from "@/components/PageAdmin.vue";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuButton,
} from "@ionic/vue";
export default {
  name: "AdminHome",
  components: {
    IonPage,
    IonContent,
    PageAdmin,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonMenuButton,
    BackButton,
  },
};
</script>

<style scoped>
.text {
  font-family: "Fredoka One", cursive;
  font-size: 3em;
  color: #6593aa;
  text-align: center;
  position: relative;
  top: -0.5em;
}

img {
  width: 25em;
  opacity: 30%;
}

.image {
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.BackButton {
  width: 5em;
  margin: 1em auto auto 1em;
}

ion-menu-button {
  color: white;
  max-width: 3em;
  font-size: 2em;
  margin: 0.4em auto auto 0.6em;
}

ion-toolbar {
  height: 4.5em;
}

@media (max-width: 1300px) {
  /* .BackButton {
    position: relative;
    bottom: 0.3em;
    right: 27em
  } */

  .image {
    top: 55%;
  }
}
@media (min-width: 1300px) and (min-height: 1000px) {
  .image {
    top: 55%;
  }
  img {
  width: 40em;
  opacity: 30%;
}
}
</style>
