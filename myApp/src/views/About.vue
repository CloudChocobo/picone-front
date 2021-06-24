<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageAdmin>
        <ion-header>
          <ion-toolbar>
            <ion-buttons side="start">
              <ion-menu-button></ion-menu-button>
              <BackButton></BackButton>
              <ion-title>À propos</ion-title>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <div class="about">
          <h1>Crédits</h1>
          <h2 class="team">Responsable Projet</h2>
          <ul>
            <li>Brigitte Le Pevedic</li>
            <li>Emmanuel Le Pevedic</li>
          </ul>
          <h2 class="team">L'équipe Dev</h2>
          <ul>
            <li>Aurelie Huber : https://github.com/CloudChocobo</li>
            <li>Kevin Deveza : https://github.com/KevinDvZ</li>
            <li>Noemie Bezzaz : https://github.com/noemienb</li>
            <li>Franck Isambert : https://github.com/Kyf-Git</li>
            <li>Marvin Silva : https://github.com/Marvin-Silva</li>
          </ul>
          <h2 class="icones">Icones</h2>
          <h3>Flaticon</h3>
          <ul class="iconeSource">
            <li>Icônes provenant de "Freepik" : https://www.freepik.com</li>
            <!-- <li>Icônes provenant de "Freepik" : https://www.freepik.com/ from <a href="https://www.flaticon.com/fr/" title="Flaticon">www.flaticon.com</a></li> -->
            <li>
              Icônes créées par "Smashicons" :
              https://www.flaticon.com/authors/smashicons
            </li>
            <!-- <li>Icons made by "Smashicons" :  https://www.flaticon.com/authors/smashicons" from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li> -->
            <li>
              Icônes créées par "monkik" :
              https://www.flaticon.com/authors/monkik
            </li>
            <!-- <li>Icônes créées par "monkik" : https://www.flaticon.com/authors/monkik 
            from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li> -->
          </ul>
          <h3>Autres</h3>
          <ul class="iconeSource">
            <li>
              Icônes créées par "Franck Isambert" : https://github.com/Kyf-Git
            </li>
          </ul>
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
  name: "About",

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
.about {
  font-family: "Fredoka One", cursive;
  color: #6593aa;
  margin: 2.5em auto auto 4em;
}

h1 {
  color: #3f7a97;
  font-size: 2em;
  margin-left: -1em;
}

h2 {
  color: #3c81a3;
}

h3 {
  color: rgb(87, 136, 161);
  font-size: 1.1em;
  margin-left: 1em;
}

/* .iconeSource {
  margin-left: 1em;
} */

ul {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
li {
  margin: auto auto 0.6em 2.5em;
}
ion-title {
  font-family: "Fredoka One", cursive;
  justify-items: center;
  font-size: 2.5em;
  color: #536974;
  position: relative;
  top: 0.15em;
  text-align: center;
}
ion-header {
  justify-content: space-between;
}
ion-toolbar {
  color: #536974;
  height: 4em;
}
ion-buttons {
  background: #8badbe;
}
ion-button {
  display: flex;
  width: 22%;
}
ion-button:hover {
  filter: brightness(1.2);
}
ion-button:active {
  transform: scale(0.9);
}
.toolbar-container {
  background: #8badbe;
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

ion-page {
  z-index: 0;
  background-color: #8badbe;
}
</style>