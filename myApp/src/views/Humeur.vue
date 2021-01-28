
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageV3>
        <main>
          <div class="texte">Comment vous sentez vous?</div>
          <GrilleImage>
            <Carte
              v-for="(carte, index) in cartes"
              :image="carte.image"
              :description="carte.description"
              :key="index"
              @click="doAction(carte)"
            />
          </GrilleImage>
        </main>

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
      </PageV3>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";
import PageV3 from "@/components/PageV3.vue";
import Carte from "@/components/Carte.vue";
import Panier from "@/components/Panier.vue";
import GrilleImage from "@/components/GrilleImage.vue";
import {libraryCartes}  from "@/data.ts" ;
export default {
  name: "Humeur",
  components: {
    IonPage,
    IonContent,
    PageV3,
    Carte,
    Panier,
    GrilleImage,
  },
  props: [],
  setup() {
    const router = useRouter();
    return { router };
  },

  data: () => {
    return {
      cartes : libraryCartes.humeur,
      currentIndex: 0,
      currentId: "",
      discussion: "panier",
    };
  },

  methods: {
    addItemToPanier(carte) {
      this.$store.commit('addElementToPanier', carte);
    },
    removeItemFromPanier() {
      this.$store.commit('removeElementFromPanier');
    },
    doAction(carte){
      if(carte.redirectsTo){
        this.$router.push("/"+carte.redirectsTo);
      } else {
        this.addItemToPanier(carte);
      }
    }
  },
   computed: { panier(){ return this.$store.state.panier } }
};
</script>

<style scoped>
.texte {
  display: flex;
  font-size: 50px;
  margin-left: 17%;
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

footer{ 
  display: none;
  }

</style>