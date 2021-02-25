
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageV2 @cancelLastAction="removeItemFromPanier">
        <main>
          <div class="text">Choisissez un objet :</div>
          <ImageGrid>
            <Card
              v-for="(card, index) in cards"
              :image="card.image"
              :description="card.description"
              :key="index"
              @click="doAction(card)"
            />
          </ImageGrid>
        </main>

        <footer>
          <!-- <div class="rectangle_discussion"> -->
          <Panier>
            <Card
              v-for="(card, index) in panier"
              :image="card.image" 
              :description="card.description" 
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
import Card from "@/components/Card.vue";
import Panier from "@/components/Panier.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import {libraryCartes}  from "@/data.ts" ;
export default {
  name: "Objets",
  components: {
    IonPage,
    IonContent,
    PageV2,
    Card,
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
      cards : libraryCartes.objets,
      currentIndex: 0,
      currentId: "",
      discussion: "panier",
    };
  },

  methods: {
    addItemToDialogBox(card) {
      this.$store.commit('addElementToPanier', card);
    },
    removeItemFromPanier() {
      this.$store.commit('removeElementFromPanier');
    },
    doAction(card){
      if(card.redirectsTo){
        this.$router.push("/"+card.redirectsTo);
      } else {
        this.addItemToDialogBox(card);
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