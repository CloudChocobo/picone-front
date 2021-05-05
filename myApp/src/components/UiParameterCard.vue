<template>
  <div class="UiParameterCard">
    <div class="info">
      <div class="text">
        <div class="id">Configuration {{ index + 1}}</div>
        <div v-if="byDefault == true"> <button id="defaultSignal" ion-button color="secondary" outline>Par défaut</button></div>
        <br>
        <div v-if="scrollingIsActive == true">Défilement activé</div>
        <div v-if="scrollingIsActive == false">Défilement désactivé</div>
        <div >Vitesse de défilement : {{ scrollingSpeed }} ms</div>
        <div class="couleurDef">Couleur du défilement :
          <div :style="cssVars"></div>
        </div>
      </div>
    </div>
    <ion-button color="light" @click="modalOpen = true">Editer</ion-button>
    <ModalUiParam v-if="modalOpen" v-model:isOpen="modalOpen" title="Configurer l'interface et les outils" :uiParam=uiParam></ModalUiParam>
  </div>
</template>

<script>
import ModalUiParam from "@/components/ModalUiParam.vue";
import {IonButton} from "@ionic/vue";

export default {
  name: "UiParameterCard",
  props: ["index","id","byDefault", "scrollingSpeed", "scrollingColor","scrollingByDefault","establishment","scrollingIsActive","uiParam"],
  components: {
    ModalUiParam,
    IonButton,
  },

  methods: {},
  data: () => {
    return {
      value: "valeur",
      modalOpen: false,
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
#defaultSignal{
  text-align: right;
}
.text{
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 5px;
}

</style>