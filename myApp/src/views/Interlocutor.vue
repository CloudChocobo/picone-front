
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageWithFirstNavBar>
        <main>
          <div class="text">Choisissez votre interlocuteur :</div>
          <div class="grille"><ImageGrid>
            <Card
              v-for="(card, index) in cards"
              :image="card.image"
              :description="card.description"
              :key="index"
              @click="doAction(card)"
            />
          </ImageGrid></div>
        </main>

        <footer>
          <!-- <div class="rectangle_discussion"> -->
          <Basket>
            <Card
              v-for="(card, index) in basket"
              :image="card.image" 
              :description="card.description" 
              :key="index"
            />
          </Basket>
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
import Card from "@/components/Card.vue";
import Basket from "@/components/Basket.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import {libraryCards}  from "@/data.ts" ;
export default {
  name: "Interlocutor",
  components: {
    IonPage,
    IonContent,
    PageWithFirstNavBar,
    Card,
    Basket,
    ImageGrid,
  },
  props: [],
  setup() {
    const router = useRouter();
    return { router };
  },

  data: () => {
    return {
      cards : libraryCards.personnes,
      currentIndex: 0,
      currentId: "",
      discussion: "basket",
    };
  },

  methods: {
    addItemToDialogBox(card) {
      this.$store.commit('addElementToBasket', card);
    },
    removeItemFromDialogBox() {
      this.$store.commit('removeElementFromBasket');
    },
    doAction(card){
      if(card.redirectsTo){
        this.$router.push("/"+card.redirectsTo);
      } else {
        this.addItemToDialogBox(card);
      }
    }
  },
   computed: { basket(){ return this.$store.state.basket } }
};
</script>

<style scoped>
.text {
  display: flex;
  font-size: 50px;
  margin-left: 19%;
  color: #536974;
  position: relative;
  text-align: center;
  /* margin-top: 10px; */
}

.grille {
  margin-top:30px;
  margin-left:22%;
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