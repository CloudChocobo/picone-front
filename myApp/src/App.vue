<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
import 

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  methods:{
    fetchAll() {
      const url ='https://niveaubonus.fr/picone/src/icones/mots'
      fetch('https://piconebackend.herokuapp.com/mots')
        .then((response)=>response.json())
        .then((libraryCards) => {
          const arrayMotsNew = libraryCards.map((mot) => {
            const imgName = mot.imgurl;
            mot.imgurl = url + imgName;

            return mot;
          });
        });
    }
  },
  enregistrerDansLeStore(arrayMotNew){}
});
</script>


<style>
body {
  color: #8badbe;
}
</style>
