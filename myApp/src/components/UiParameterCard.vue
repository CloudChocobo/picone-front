<template>
  <div class="UiParameterCard">
    <div class="info">
      <div class="text">
        <div class="loadingSprite" v-if="loaded === false">
          <img src="myApp/src/assets/loading1.gif">
        </div>
        <h2 class="id">Configuration {{ index + 1}}</h2>
        <div v-if="byDefault === true"> <button id="defaultSignal" ion-button color="secondary" outline>Par défaut</button></div>
        <ion-list class="inside-ion-card">
          <ion-list-header>Défilement</ion-list-header>
        <ion-item v-if="scrollingIsActive === true">Défilement activé</ion-item>
        <ion-item v-if="scrollingIsActive === false">Défilement désactivé</ion-item>
          <ion-item >Vitesse de défilement : <ion-label>{{ scrollingSpeed }} ms</ion-label></ion-item>
        <ion-item class="ion-align-items-end, couleurDef ">Couleur du défilement :
          <div :style="cssVars"></div>
        </ion-item>
        </ion-list>
      </div>
    </div>
    <ion-button color="light" @click="modalOpen = true ; buttonPushed='edit'">Editer</ion-button>
    <ModalUiParam
        v-if="modalOpen && buttonPushed==='edit'"
        v-model:isOpen="modalOpen"
        title="Configurer l'interface et les outils"
        :uiParam=uiParam
        :index="index"
        :buttonPushed="'edit'"></ModalUiParam>

    <ion-button v-if="byDefault === false" color="light" @click="modalOpen = true ; buttonPushed='makeDefault'">Appliquer par défaut</ion-button>

    <ModalUiParam
        v-if="modalOpen && buttonPushed==='makeDefault'"
        v-model:isOpen="modalOpen"
        title="Appliquer un UiParameter par défaut"
        :uiParam=uiParam
        :index="index"
        :buttonPushed="'makeDefault'"></ModalUiParam>

    <ion-button v-if="byDefault === false" color="light" @click="modalOpen = true ; buttonPushed='delete'">Supprimer</ion-button>
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
  props: ["index","id","byDefault","loaded", "scrollingSpeed", "scrollingColor","scrollingByDefault","scrollingIsActive","uiParam"],
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
        'background-color': '#'+ this.scrollingColor,
        'height' : '15px',
        'width' : '25px',
        'float': 'right'
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
.info{
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
}

.couleurDef {
  text-align: justify;
}
ion-button{
  align-content: flex-end;
}

.inside-ion-card{
  width: 100%;
}
#defaultSignal{
  text-align: right;
}
.text{
  display: flex;
  flex-direction: column;
  align-items: inherit;
  gap: 5px;
}

ion-list  {
  background-color: #b0d9ec;
  border-width: 1px;
  border-style: ridge;
  border-color: #C0C0C0;
  border-radius: 15px;
  margin: 3px 5% 3px 5%;
}

</style>