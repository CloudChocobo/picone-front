<template>
  <div class="container">
    <div class="background"></div>
    <ion-card>
      <form v-if="buttonPushed === 'edit'" @submit.prevent="submit" >
        <ion-card-content>
          <h1>Edition de la configuration {{index + 1}}</h1>
          <h4> ID Neo4J : {{uiParam.id}}</h4>
          <ion-card class=" ion-padding-vertical">
            <ion-card-content>
            <ion-label>Par défaut : </ion-label>
            <ion-toggle
                v-if="uiParam.byDefault === true"
                checked
            ></ion-toggle>
            <ion-toggle
                v-else
                unchecked
            ></ion-toggle>
          </ion-card-content>
          </ion-card>


          <ion-card class="card-inside">
            <ion-card-title class="ion-padding" >
              Défilement
            </ion-card-title>
          <ion-item>
            <ion-label>Activé : </ion-label>
            <ion-toggle
                v-if="uiParam.scrollingIsActive === true"
                checked
                @ionChange="uiParamForm.scrollingIsActive = !uiParamForm.scrollingIsActive"
            ></ion-toggle>
            <ion-toggle
                v-else
                unchecked
                @ionChange="uiParamForm.scrollingIsActive = !uiParamForm.scrollingIsActive"

            ></ion-toggle>
          </ion-item>

          <ion-item>
          <ion-label speed>Vitesse :</ion-label>
          <ion-input
              type="number"
              v-bind:value="scrollingSpeed"
              v-model="uiParamForm.scrollingSpeed"
              :required="true"
              class="ion-padding"
          ></ion-input>
          <ion-label> millisecondes </ion-label>
            </ion-item>
            <ion-item>

            <ion-label >Couleur :</ion-label>
          <input
              type="color"
              v-bind:value="'#'+scrollingColor"
              :required="true"
              @change="changeColorForm(color, 'color', $event)"
          >
            </ion-item>

          </ion-card>
        </ion-card-content>

        <ion-button color="medium" @click="[submit(), save()]"
        >Enregistrer</ion-button
        >
        <ion-button color="medium" @click="cancel()"
        >Annuler</ion-button
        >
      </form>

      <form class="modalNewUiParam" v-if="buttonPushed === 'new'" @submit.prevent="submit">

        <div class="ion-padding">
          <ion-card-title>Nouvelle configuration</ion-card-title>
        </div>
        <ion-card class="card-inside">
          <ion-card-title class="ion-padding" >
            Défilement :
          </ion-card-title>
          <ion-card-subtitle class="ion-text-center">Le défilement est l'outil de sélection par appui d'un bouton simple.</ion-card-subtitle>
          <ion-card-content color="secondary">
            <ion-label>Vitesse :</ion-label>
            <ion-input
                type="number"
                v-model="uiParamForm.scrollingSpeed"
                v-bind:value="scrollingSpeed"
                :required="true"
            ></ion-input>
            <p>millisecondes</p>
          </ion-card-content>
          <ion-card-content >
            <ion-label >Couleur :</ion-label>
            <input
                type="color"
                v-bind:value="color"
                :required="true"
                @change="changeColorForm(color, 'color', $event)"
            >
          </ion-card-content>
        </ion-card>

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
          <ion-label>Vitesse du défilement:</ion-label>
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
  IonLabel,
} from "@ionic/vue";
import axios from "axios";
import {rootAPI} from "@/data.ts";

export default {
  components: {
    IonCard,
    IonButton,
    IonInput,
    IonCardContent,
    IonLabel,
  },
  name: "modalUiParam",
  props: ["isOpen", "title", "uiParam","buttonPushed","index"],
  emits: ["update:isOpen"],
  data() {

    return {
      uiParamForm: {
      scrollingSpeed: 1500,
      scrollingColor:"",
      byDefault: false,
        scrollingIsActive: false
      },
      color: '#59c7f9'
    } ;
  },

  updated() {
    this.$nextTick(function (this.uiParam, this.uiParamForm) {
      this.uiParam ? this.uiParamForm = this.uiParam : null
    })
  },


  computed:{

    scrollingSpeed(){
      return (this.uiParam ? this.uiParam.scrollingSpeed : 1500 );
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
          scrollingSpeed: this.uiParamForm.scrollingSpeed,
          scrollingColor: this.uiParamForm.scrollingColor,
          byDefault : this.uiParamForm.byDefault,
          scrollingIsActive: this.uiParamForm.isActive
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
      } else if (this.buttonPushed === 'delete')
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
    changeColorForm(color,property, event){
      this.uiParamForm.scrollingColor = event.target.value.substring(1);
    }
      },

};
</script>

<style scoped>

h1 {
margin: 2px 10px 10px 2px;
  text-underline-color: #1e2023;
}

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

.card-inside{
  display: grid;
  width: 95% !important;
  margin: 0 4px 2px 4px !important;

}

</style>
