<template>
  <div class="container">
    <div class="background"></div>
    <div class="box">
      <ion-card>
        <form @submit.prevent="submit">
          <ion-card-content>
            <ion-label lastName>Vitesse du défilement:</ion-label>
            <ion-input
                type="number"
                v-model="scrollingSpeedForm"
                v-bind:placeholder="uiParam.scrollingSpeed"
                :required="true"
            ></ion-input>
            <br>
            <ion-input
                type="text"
                v-model="scrollingColorForm"
                v-bind:placeholder="uiParam.scrollingColor"
                :required="true"
            ></ion-input>
          </ion-card-content>
          <ion-button color="medium" @click="[submit(), save()]"
          >Enregistrer</ion-button
          >
          <ion-button color="medium" @click="cancel()"
          >Annuler</ion-button
          >
        </form>
      </ion-card>
    </div>
  </div>
</template>

<script>
import {
  IonCard,
  IonButton,
  IonInput,
  IonCardContent,
} from "@ionic/vue";
import axios from "axios";
import {rootAPI} from "@/data.ts";

export default {
  components: {
    IonCard,
    IonButton,
    IonInput,
    IonCardContent,
  },
  name: "modalUiParam",
  props: ["isOpen", "title", "uiParam"],
  emits: ["update:isOpen"],
  data() {
    return {
      scrollingSpeedForm: 0,
      scrollingColorForm:""
    };
  },
  computed:{
    scrollingSpeed(){
        return this.uiParam.scrollingSpeed;
    },
    scrollingColor(){
      return this.uiParam.scrollingColor;
    }
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
    },
  },
};
</script>

<style scoped>
.container {
  z-index: 2;
  position: fixed;
  width: 100%; /* % width page */
  height: 100%; /* % heigth page*/
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /*du contenant*/
  height: 100%; /*du contenant*/
  background-color: rgb(226, 224, 224);
  opacity: 0.8;
}
.box {
  display: flex;
  align-items: center;
  width: 50%;
  height: 36%;
}
ion-card {
  background-color: #bdddec;
  border-radius: 10px;
  overflow: hidden;
  width: 200%;
  height: 180%;
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
</style>