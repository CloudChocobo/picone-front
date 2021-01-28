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
    <div class="texte">
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
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonMenuButton } from "@ionic/vue";
export default {
  name: "AdminAccueil",
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
.texte {
  display: flex;
  font-size: 50px;
  margin-left: 200px;
  color: #536974;
  position: relative;
  text-align: center;
  margin-top: -4%;
}
ion-title {
  justify-items: center;
  font-size: 30px;
  color: #536974;
  position: relative;
  text-align: center;

}
ion-toolbar {
  color: #536974;
  height:90px;
}
ion-buttons {
  background: #8badbe;
}
.toolbar-container {
  background: #8badbe;
}

.image {
  display: flex;
  margin-left: 250px;
}
.BackButton {
  width: 8%;
  margin-left: 3%;
  margin-top: 2%;
}

/* .button-inner {
  width: 25%;
  margin-left: 3%;
  margin-top: 2%;
} */
</style>
