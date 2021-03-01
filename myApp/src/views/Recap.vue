
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageWithSecondNavBar @cancelLastAction="removeItemFromDialogBox">
        <main>
          <div class="text">Terminez votre phrase:</div>
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
          <Basket2>
            <Card
              v-for="(card, index) in basket"
              :image="card.image" 
              :description="card.description" 
              :key="index"
            />
          </Basket2>
          <!-- </div> -->
        </footer>
      </PageWithSecondNavBar>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";
import PageWithSecondNavBar from "@/components/PageWithSecondNavBar.vue";
import Card from "@/components/Card.vue";
import Basket2 from "@/components/Basket2.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import {libraryCards}  from "@/data.ts" ;
export default {
  name: "Recap",
  components: {
    IonPage,
    IonContent,
    PageWithSecondNavBar,
    Card,
    Basket2,
    ImageGrid,
  },
  props: [],
  setup() {
    const router = useRouter();
    return { router };
  },

  data: () => {
    return {
      cards : libraryCards.punctuation,
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

</style>