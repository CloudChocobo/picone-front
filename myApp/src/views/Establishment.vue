<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageAdmin>
        <ion-header>
          <ion-toolbar>
            <ion-buttons side="start">
              <ion-menu-button></ion-menu-button>
              <BackButton></BackButton>
              <ion-title>Établissements</ion-title>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-button color="medium" @click="modalOpen = true"
          >Ajouter un établissement</ion-button
        >

        <div class="grid">
          <EstablishmentCard
            v-for="establishment in establishments"
            :key="establishment.id"
            :id="establishment.id"
            :name="establishment.name"
            :address="establishment.address"
            :postalCode="establishment.postalCode"
            :city="establishment.city"
            :phone="establishment.phone"
            :email="establishment.email"
          >
          </EstablishmentCard>
        </div>

        <EstablishmentModal
          v-if="modalOpen"
          v-model:isOpen="modalOpen"
          title="Ajouter un établissement"
        >
        </EstablishmentModal>
      </PageAdmin>
    </ion-content>
  </ion-page>
</template>

<script>
import EstablishmentModal from "@/components/EstablishmentModal.vue";
import EstablishmentCard from "@/components/EstablishmentCard";
import BackButton from "@/components/BackButton.vue";
import PageAdmin from "@/components/PageAdmin.vue";
import { rootAPI } from "@/data.ts";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuButton,
  IonButton,
} from "@ionic/vue";
export default {
  name: "Establishment",
  props: ["setEstablishments"],
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
    EstablishmentCard,
    EstablishmentModal,
  },

  mounted() {
    this.fetchAllEstablishments();
  },

  data: () => {
    return {
      value: "valeur",
      modalOpen: false,
    };
  },
  methods: {
    fetchAllEstablishments() {
      console.log("try");
      fetch(rootAPI + "establishments")
        .then((response) => response.json())
        .then((data) => {
          this.$store.commit("setEstablishments", data);
        })
        .catch((err) => {
          console.error("error to check", err);
        });
    },
  },

  computed: {
    /*fait appel au store*/
    establishments() {
      return this.$store.getters.establishments;
    },
  },
};
</script>

<style scoped>
.text {
  display: flex;
  font-size: 50px;
  margin-left: 200px;
  color: #536974;
  position: relative;
  text-align: center;
  margin-top: -4%;
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
ion-toolbar {
  color: #536974;
  height: 4.5em;
}
ion-buttons {
  background: #8badbe;
}
ion-button {
  display: flex;
  width: 25%;
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
