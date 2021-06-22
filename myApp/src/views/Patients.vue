<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageAdmin>
        <ion-header>
          <ion-toolbar>
            <ion-buttons side="start">
              <ion-menu-button></ion-menu-button>
              <BackButton></BackButton>
              <ion-title>Patients</ion-title>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-button color="medium" @click="modalOpen = true"
          >Ajouter un patient</ion-button
        >

        <div class="grid">
          <PatientCard
            v-for="patient in patients"
            :key="patient.id"
            :id="patient.id"
            :lastName="patient.lastName"
            :firstName="patient.firstName"
            :email="patient.email"
            :password="patient.password"
            :idEstablishment="patient.idEstablishment"
            :image="patient.image"
          ></PatientCard>
        </div>

        <ModalPatient
          v-if="modalOpen"
          v-model:isOpen="modalOpen"
          title="Ajouter un patient"
        >
        </ModalPatient>
      </PageAdmin>
    </ion-content>
  </ion-page>
</template>

<script>
import ModalPatient from "@/components/ModalPatient.vue";
import PatientCard from "@/components/PatientCard";
import BackButton from "@/components/BackButton.vue";
import PageAdmin from "@/components/PageAdmin.vue";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuButton,
  IonButton,
} from "@ionic/vue";
import { rootAPI } from "@/data.ts";
export default {
  name: "Patients",
  props: ["setPatients"],
  components: {
    IonPage,
    IonContent,
    PageAdmin,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonMenuButton,
    IonButton,
    BackButton,
    PatientCard,
    ModalPatient,
  },
  mounted() {
    this.fetchAllPatients();
  },
  data: () => {
    return {
      value: "valeur",
      modalOpen: false,
    };
  },
  methods: {
    /* Méthode fetch pour récupérer tous les patients à l'affichage de la page*/
    fetchAllPatients() {
      fetch(rootAPI + "patients")
        .then((response) => response.json())
        .then((data) => {
          this.$store.commit("setPatients", data);
        })
        .catch((err) => {
          console.error("error to check", err);
        });
    },
  },
  computed: {
    /*fait appel au store*/
    patients() {
      return this.$store.getters.patients;
    },
  },
};
</script>

<style scoped>
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
.image {
  display: flex;
  margin-left: 250px;
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
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  gap: 10px;
}
ion-page {
  z-index: 0;
  background-color: #8badbe;
}
</style>