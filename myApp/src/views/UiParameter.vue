<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageAdmin>
        <ion-header>
          <ion-toolbar>
            <ion-buttons side="start">
              <ion-menu-button></ion-menu-button>
              <BackButton></BackButton>
              <ion-title>Paramètres d'interface et de fonctionnalités</ion-title>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-button color="medium" @click="modalOpen = true">Créer une nouvelle configuration</ion-button>
        <ModalUiParam
            v-if="modalOpen"
            v-model:isOpen="modalOpen"
            title="Configurer l'interface et les outils"
            :uiParam={}
            :buttonPushed="'new'"
        ></ModalUiParam>

        <div class="grid">
          <UiParameterCard
              v-for="(uiparameter,index) in uiParameters"
              :key="uiparameter.id"
              :index="index"
              :id="uiparameter.id"
              :byDefault="uiparameter.byDefault"
              :scrollingIsActive="uiparameter.scrollingIsActive"
              :scrollingColor="uiparameter.scrollingColor"
              :scrollingSpeed="uiparameter.scrollingSpeed"
              :uiParam="uiparameter"
          ></UiParameterCard>
        </div>

        <ModalUiParam v-if="modalOpen" v-model:isOpen="modalOpen" title="Ajouter une configuration">
        </ModalUiParam>
      </PageAdmin>
    </ion-content>
  </ion-page>
</template>

<script>
import ModalUiParam from "@/components/ModalUiParam.vue";
import UiParameterCard from "@/components/UiParameterCard.vue";
import BackButton from "@/components/BackButton.vue";
import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonMenuButton, IonButtons, IonButton} from "@ionic/vue";
import {rootAPI} from "../data";
import PageAdmin from "../components/PageAdmin";
import axios from "axios";

export default {
  name: "UiParameter",
  components: {
    IonHeader,
    PageAdmin,
    IonPage,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonMenuButton,
    BackButton,
    UiParameterCard,
    ModalUiParam
  },
  data: () => {
    return {
      rootAPI: rootAPI,
      modalOpen: false,
    };
  },
  mounted() {
    this.fetchAllUiParametersAXIOS();
  },
  methods: {
    fetchAllUiParameters() {
      fetch(rootAPI + "uiparams")
          .then((response) => response.json())
          .then((data) => {
            this.$store.commit("setUiParameters", data);
          })
          .catch((err) => {
            console.error("Error fetching UiParams", err);
          });
    },
    fetchAllUiParametersAXIOS(){
      axios.get(rootAPI + "uiparams")
          .then((response) => {
            this.$store.commit("setUiParameters", response.data);
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }
  },
  computed: {
    uiParameters() {
      return this.$store.getters.uiParameters;
    },
  },
}

</script>

<style scoped>
ion-title {
  justify-items: center;
  font-size: 30px;
  color: #536974;
  position: relative;
  text-align: center;
}
ion-toolbar {
  color: #536974;
  height: 30%;
}
ion-buttons {
  background: #8badbe;
}
ion-button {
  display: flex;
  width: 20%;
  margin: 10px 0 2px 10px;
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
.image {
  display: flex;
  margin-left: 250px;
}
.BackButton {
  width: 5%;
  margin-left: 3%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  gap: 10px;
  margin: 1% 1% 5% 1%;
}
ion-page{
  z-index:0;
  background-color: #8badbe;
}
</style>