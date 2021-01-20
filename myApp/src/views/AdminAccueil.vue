<template>
<PageAdmin>
    <ion-header>
  <ion-toolbar>
      <ion-buttons side="start">
      <ion-menu-button></ion-menu-button>
      </ion-buttons>
    <ion-title>
      Home
    </ion-title>
  </ion-toolbar>
</ion-header>
        <div class="texte">
            <p>Bienvenue dans les paramètres</p>
            </div>
<div class="image">
            <img src="../assets/IconeParam.png" alt="" />
    </div>
    </PageAdmin>
    
</template>

<script>
import PageAdmin from "@/components/PageAdmin.vue";
import {IonHeader,IonToolbar, IonTitle, IonMenuButton} from '@ionic/vue';
export default {
        name: "AdminAccueil",
        components: {PageAdmin, IonHeader,IonToolbar, IonTitle, IonMenuButton},
    };
</script>

<style scoped>
.texte {
    display: flex;
    font-size: 50px;
    margin-left: 200px;
    color: #536974;
    position: relative;
    text-align:center;
    margin-top:10px;   
}  

ion-toolbar {
   color : #536974;
}
ion-buttons{
  background: #8BADBE;
}
.toolbar-container{
    background: #8BADBE;
}
.image{
    display: flex;
margin-left: 250px;
}

</style>
