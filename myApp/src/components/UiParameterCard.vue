<template>
  <div class="UiParameterCard">
    <h2 class="id">Configuration {{ index + 1 }}</h2>
    <div v-if="byDefault === true">
      <button id="defaultSignal" ion-button color="primary" outline>Par défaut</button>
    </div>
    <ion-card>
      <ion-list-header>Défilement</ion-list-header>
      <ion-item v-if="scrollingIsActive === true">
        <ion-label> Défilement activé </ion-label>
        <ion-item>
          <div class="green-circle"></div>
        </ion-item>
      </ion-item>
      <ion-item v-if="scrollingIsActive === false">
        <ion-label> Défilement désactivé </ion-label>
        <ion-item>
          <div class="red-circle"></div>
        </ion-item>
      </ion-item>
      <ion-item>
        <ion-label>Vitesse de défilement :</ion-label>
        <ion-item>{{ scrollingSpeed }} ms</ion-item>
      </ion-item>
      <ion-item>
        <ion-label> Couleur du défilement : </ion-label>
        <ion-item>
          <div :style="cssVars"></div>
        </ion-item>
      </ion-item>
    </ion-card>
    <ion-button color="light" @click="modalOpen = true ; buttonPushed='edit'">Editer</ion-button>
    <ModalUiParam
        v-if="modalOpen && buttonPushed==='edit'"
        v-model:isOpen="modalOpen"
        title="Configurer l'interface et les outils"
        :uiParam=uiParam
        :index="index"
        :buttonPushed="'edit'"></ModalUiParam>
    <ion-button v-if="byDefault === false" color="light" @click="modalOpen = true ; buttonPushed='makeDefault'">
      Appliquer par défaut
    </ion-button>
    <ModalUiParam
        v-if="modalOpen && buttonPushed==='makeDefault'"
        v-model:isOpen="modalOpen"
        title="Appliquer un UiParameter par défaut"
        :uiParam=uiParam
        :index="index"
        :buttonPushed="'makeDefault'"></ModalUiParam>
    <ion-button v-if="byDefault === false" color="light" @click="modalOpen = true ; buttonPushed='delete'">Supprimer
    </ion-button>
    <ModalUiParam
        v-if="modalOpen && buttonPushed==='delete'"
        v-model:isOpen="modalOpen"
        title="Configurer l'interface et les outils"
        :uiParam=uiParam
        :index="index"
        :buttonPushed="'delete'"></ModalUiParam>
  </div>
</template>

<script>
import ModalUiParam from "@/components/ModalUiParam.vue";
import {IonButton} from "@ionic/vue";

export default {
  name: "UiParameterCard",
  props: ["index", "id", "byDefault", "loaded", "scrollingSpeed", "scrollingColor", "scrollingByDefault", "scrollingIsActive", "uiParam"],
  components: {
    ModalUiParam,
    IonButton,
  },

  methods: {},
  data: () => {
    return {
      value: "valeur",
      modalOpen: false,
      buttonPushed: ''
    };
  },

  computed: {
    cssVars() {
      return {
        'background-color': '#' + this.scrollingColor,
        'height': '15px',
        'width': '25px',
        'float': 'right',
        'border': '1px solid #000000'
      }
    }
  }
};
</script>

<style scoped>
.title {
  height: min-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.UiParameterCard {
  background-color: #bdddec;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: column;
  padding: 15px 20px;
  border-radius: 15px;
  gap: 10px;
  height: 100%;
}

.info {
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
}

.couleurDef {
  text-align: justify;
}

ion-button {
  align-content: flex-end;
}

.inside-ion-card {
  width: 100%;
}

#defaultSignal {
  text-align: right;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: inherit;
  gap: 5px;
}

ion-list {
  background-color: #b0d9ec;
  border-width: 1px;
  border-style: ridge;
  border-color: #C0C0C0;
  border-radius: 15px;
  margin: 3px 5% 3px 5%;
}

.green-circle {
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  border: 1px solid #000000;
  width: 8px;
  height: 8px;
  background-color: #2dd36f;
}

.red-circle {
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  border: 1px solid #000000;
  width: 8px;
  height: 8px;
  background-color: #ec1c1c;
}


</style>