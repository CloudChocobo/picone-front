
<!--<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageWithSecondNavBar @cancelLastAction="removeItemFromDialogBox">
        <main>
          <div class="text">Choisissez une boisson :</div>
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
         <!-- <Basket>
            <Card
              v-for="(card, index) in basket"
              :image="card.image" 
              :description="card.description" 
              :key="index"
            />
          </Basket>
          <!-- </div> -->
        <!--</footer>
      </PageWithSecondNavBar>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";
import PageWithSecondNavBar from "@/components/PageWithSecondNavBar.vue";
import Card from "@/components/Card.vue";
import Basket from "@/components/Basket.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import {libraryCards}  from "@/data.ts" ;
export default {
  name: "Drinks",
  components: {
    IonPage,
    IonContent,
    PageWithSecondNavBar,
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
      cards : libraryCards.drinks,
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

/* .Basket {

} */

/* .rectangle_discussion .Discussion{
  grid-template-rows: fit-content(40%);
} */
</style>