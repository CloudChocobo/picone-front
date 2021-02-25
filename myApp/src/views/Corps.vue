
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageV2 @cancelLastAction="removeItemFromPanier">
        <main>
          <div class="text">Indiquez un endroit :</div>
          <ImageGrid>
            <Card
              v-for="(carte, index) in cartes"
              :image="carte.image"
              :description="carte.description"
              :key="index"
              @click="doAction(carte)"
            />
          </ImageGrid>
        </main>

        <footer>
          <!-- <div class="rectangle_discussion"> -->
          <Panier>
            <Card
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
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";
import PageV2 from "@/components/PageV2.vue";
import Carte from "@/components/Carte.vue";
import Panier from "@/components/Panier.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import {libraryCartes}  from "@/data.ts" ;
export default {
  name: "Corps",
  components: {
    IonPage,
    IonContent,
    PageV2,
    Carte,
    Panier,
    ImageGrid,
  },
  props: [],
  setup() {
    const router = useRouter();
    return { router };
  },

  data: () => {
    return {
      cartes : libraryCartes.nourriture,
      currentIndex: 0,
      currentId: "",
      discussion: "panier",
    };
  },

  methods: {
    addItemToDialogBox(carte) {
      this.$store.commit('addElementToPanier', carte);
    },
    removeItemFromPanier() {
      this.$store.commit('removeElementFromPanier');
    },
    doAction(carte){
      if(carte.redirectsTo){
        this.$router.push("/"+carte.redirectsTo);
      } else {
        this.addItemToDialogBox(carte);
      }
    }
  },
   computed: { panier(){ return this.$store.state.panier } }
};
</script>

<style scoped>
.text {
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

.invisibleBlockAlignment {
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