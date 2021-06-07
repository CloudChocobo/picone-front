<template>
  <div class="container">
    <div class="background"></div>
      <ion-card>
        <form v-if="buttonPushed === 'edit'" @submit.prevent="submit">
          <ion-card-content>
            <h1>Edition de la configuration {{index + 1}}</h1>
            <ion-label speed>Vitesse du défilement:</ion-label>
            <ion-input
                type="number"
                v-model="scrollingSpeedForm"
                v-model:placeholder="scrollingSpeed"
                value="scrollingSpeed"
                :required="true"
            ></ion-input>
            <br>
            <ion-label speed>Modifier le code Hexadécimal de la couleur :</ion-label>
            <ion-input
                type="text"
                v-model="scrollingColorForm"
                v-model:placeholder="scrollingColor"
            ></ion-input>
           </ion-card-content>
          <ion-button color="medium" @click="[submit(), save()]"
          >Enregistrer</ion-button
          >
          <ion-button color="medium" @click="cancel()"
          >Annuler</ion-button
          >
        </form>

        <form class="modalNewUiParam" v-if="buttonPushed === 'new'" @submit.prevent="submit">
          <ion-card-content>
            <h1>Nouvelle configuration</h1>
            <ion-label lastName>Vitesse du défilement:</ion-label>
            <ion-input
                type="number"
                v-model="scrollingSpeedForm"
                v-bind:placeholder="scrollingSpeed"
                :required="true"
            ></ion-input>
            <br>
            <ion-input
                type="text"
                v-model="scrollingColorForm"
                v-model:placeholder="scrollingColor"
            ></ion-input>
          </ion-card-content>
          <ion-button color="medium" @click="[submit(), save()]"
          >Enregistrer</ion-button
          >
          <ion-button color="medium" @click="cancel()"
          >Annuler</ion-button
          >
        </form>

        <form  v-if="buttonPushed === 'delete'" @submit.prevent="submit">
          <ion-card-content>
            <h1>Supprimer la configuration {{index + 1}} ?</h1>
            <ion-label speed>Vitesse du défilement:</ion-label>
            <p>{{ uiParam.scrollingSpeed }}</p>
          </ion-card-content>
          <ion-button color="medium" @click="[submit(), save()]"
          >Valider</ion-button
          >
          <ion-button color="medium" @click="cancel()"
          >Annuler</ion-button
          >
        </form>
      </ion-card>
    </div>
</template>

<script>
import {
  IonCard,
  IonButton,
  IonInput,
  IonCardContent,
    IonLabel
} from "@ionic/vue";
import axios from "axios";
import {rootAPI} from "@/data.ts";
import {vModelSelect} from "vue";


export default {
  components: {
    IonCard,
    IonButton,
    IonInput,
    IonCardContent,
    IonLabel
  },
  name: "modalUiParam",
  props: ["isOpen", "title", "uiParam","buttonPushed","index"],
  emits: ["update:isOpen"],
  data() {

    return {
      scrollingSpeedForm: 0,
      scrollingColorForm:"",
    };
  },
  beforeCreate() {
    console.log(this.buttonPushed)
  },
  computed:{
    uiParamIndex(){
      return this.uiParam.index;
    },
    scrollingSpeed(){
        return this.uiParam.scrollingSpeed;
    },
    scrollingColor(){
      return this.uiParam.scrollingColor;
    },
  },
  methods: {
    save() {
      this.$emit("update:isOpen", false);
      this.$router.go()
    },
    cancel() {
      this.$emit("update:isOpen", false);
    },
    submit() {
      const resForm = {
        uiParameter: {
          scrollingSpeed: this.scrollingSpeedForm,
          scrollingColor: this.scrollingColorForm
        },
      };
      console.log("formData" + JSON.stringify(resForm));
      if(this.buttonPushed === 'edit'){
      const address = rootAPI + "uiparams/" + this.uiParam.id;
      axios({
        method: 'put',
        url: address,
        withCredentials: false,
        crossdomain: true,
        data: resForm.uiParameter,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        }
      })
          .then((res) => {
            console.log("SpringBoot res" + JSON.stringify(res));
          })
          .catch((err) => {
            console.log(err);
          });
    } else if (this.buttonPushed === 'new')
      {
        const address = rootAPI + "uiparams/new";
        axios({
          method: 'post',
          url: address,
          withCredentials: false,
          crossdomain: true,
          data: resForm.uiParameter,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          }
        })
            .then((res) => {
              console.log("SpringBoot res" + JSON.stringify(res));
            })
            .catch((err) => {
              console.log(err);
            });
      } else (this.buttonPushed === 'delete')
      {
        const address = rootAPI + "uiparams/" + this.uiParam.id;
        axios({
          method: 'delete',
          url: address,
          withCredentials: false,
          crossdomain: true,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          }
        })
            .then((res) => {
              console.log("SpringBoot res" + JSON.stringify(res));
            })
            .catch((err) => {
              console.log(err);
            });
      }
  },
  },
};
</script>

<style scoped>
.container {
  z-index: 2;
  position: absolute;
  width: 100%; /* % width page */
  height: 100%; /* % heigth page*/
  top: 0;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.background {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /*du contenant*/
  height: 100%; /*du contenant*/
  background-color: rgb(226, 224, 224);
  opacity: 0.8;
}


ion-card {
  background-color: #bdddec;
  border-radius: 10px;
  overflow: hidden;
  width: 30%;
  padding-bottom: 2px;
  display: inline-block;
  vertical-align: middle;
  z-index: 3;
}
form {
  background-color: #bdddec;

}
ion-input {
  background-color: #f1faff;
  color: #536974;
}

ion-button {
  display: flex;
}
ion-button:hover {
  filter: brightness(1.2);
}
ion-button:active {
  transform: scale(0.9);
}
header {
  width: 100%;
  background-color: #8badbe;
  display: flex;
  justify-content: center;
  height: 15%;
}
header .title {
  margin-top: 5%;
  color: #536974;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  justify-content: center;
}
button {
  width: 50%;
  background-color: #f1faff;
}
.avatar {
  background-color: #f1faff;
  height: 75px;
  width: 75px;
  border-radius: 1px;
}
ion-select{
  background-color: #f1faff;
}

.modalNewUiParam {
}


</style>