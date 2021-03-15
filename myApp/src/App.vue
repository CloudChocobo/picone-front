<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

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
          const arrayWordsNew = libraryCards.map((word) => {
            const imgName = word.imgurl;
            word.imgurl = url + imgName;
            return word; 
          });
        });
        storeSaving(arrayWordsNew){}
    };
  };
});  
</script>


<style>
body {
  color: #8badbe;
}
</style>
