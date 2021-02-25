
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageWithFirstNavBar>
        <main>
          <div class="text">Comment vous sentez vous?</div>
          <ImageGrid>
            <Carte
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
            <Carte
              v-for="(carte, index) in panier"
              :image="carte.image" 
              :description="carte.description" 
              :key="index"
            />
          </Panier>
          <!-- </div> -->
        </footer>
      </PageWithFirstNavBar>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";
import PageWithFirstNavBar from "@/components/PageWithFirstNavBar.vue";
import Carte from "@/components/Carte.vue";
import Panier from "@/components/Panier.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import {libraryCartes}  from "@/data.ts" ;
export default {
  name: "Mood",
  components: {
    IonPage,
    IonContent,
    PageWithFirstNavBar,
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
      cartes : libraryCartes.Mood,
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
.text {
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

.invisibleBlockAlignment {
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