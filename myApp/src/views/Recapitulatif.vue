
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageV2 @cancelLastAction="removeItemFromPanier">
     <div class="container">
                <div class="texte">Terminez votre phrase</div>
        <!-- div "bidouille" vide servant simplement au placement de la classe "icone" (créee une marge) --><div class="bidouille"></div>
         <div class="finPhrase">
             <div class="point">
                <div :id="id" @click="[clearPanier($store.panier) , router.push(`/debutPhrase`)]">
                    <img src= "@/assets/affirmation.png" />
                </div>
            </div>
            <div class="interrogation">
                <div :id="id" @click="[clearPanier($store.panier) , router.push(`/debutPhrase`)]" >
                    <img src= "@/assets/question.png"  />
                </div>
            </div>
          </div>
          </div>
       

        <footer>
          <!-- <div class="rectangle_discussion"> -->
          <Panier>
            <Carte
              v-for="(carte, index) in panier"
              :image="carte.image" 
              :description="carte.description" 
              :key="index"
            />
          </Panier>
          <!-- </div> -->
        </footer>
      </PageV2>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import { useRouter } from "vue-router";
import PageV2 from "@/components/PageV2.vue";
import Carte from "@/components/Carte.vue";
import Panier from "@/components/Panier.vue";
import { libraryCartes } from "@/data.ts";

export default {
  name: "Recapitulatif",
  components: {
    IonPage,
    IonContent,
    PageV2,
    Carte,
    Panier,
    
  },
  props: [],
  setup() {
    const router = useRouter();
    return { router };
  },

  data: () => {
    return {
      cartes: libraryCartes.nourriture,
      currentIndex: 0,
      currentId: "",
      discussion: "panier",
    };
  },



  methods: {    
      methodRouter() {
      this.router.push("/debutPhrase");
      // faire un if this.currentId === Truc
      // this.router.push...
    },
    clearPanier() {
      this.$store.commit("clearPanier", this.$store.panier);
    },

    addItemToPanier(carte) {
      this.$store.commit("addElementToPanier", carte);
    },
    removeItemFromPanier() {
      this.$store.commit("removeElementFromPanier");
    },
    doAction(carte) {
      if (carte.redirectsTo) {
        this.$router.push("/" + carte.redirectsTo);
      } else {
        this.addItemToPanier(carte);
      }
    },
  },
  computed: {
    panier() {
      return this.$store.state.panier;
    },
  },
};
</script>

<style scoped>
.container {
  font-size: 45px;
  color: #536974;
  text-align: center;
}

.bidouille {
  display: inline-block;
  width: 2%;
}
img {
  max-width: 15%;
  margin-right: 2%;
  border-radius: 55px;
}
.texte {
  display: flex;
  font-size: 50px;
  margin-left: 27%;
  color: #536974;
  position: relative;
  text-align: center;
  /* margin-top: 10px; */
}

.footer {
  margin-left: 10%;
}

.rectangle_discussion {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
}

.bidouille {
  display: inline-block;
  width: 2%;
}

.Discussion img {
  margin-top: 1%;
  width: 17%;
}

/* .Panier {

} */

/* .rectangle_discussion .Discussion{
  grid-template-rows: fit-content(40%);
} */
</style>