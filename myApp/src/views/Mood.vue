
 <!--<template>
<ion-page>
    <ion-content :fullscreen="true">
      <PageWithFirstNavBar>
        <main>
          <div class="text">Comment vous sentez vous?</div>
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
          </Basket>-->
          <!-- </div> -->
       <!-- </footer>
      </PageWithFirstNavBar>
    </ion-content>
  </ion-page>
</template>

<!--<script>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from <!--"vue-router";
import PageWithFirstNavBar from "@/components/PageWithFirstNavBar.vue";
import Card from "@/components/Card.vue";
import Basket from "@/components/Basket.vue";
import ImageGrid from "@/components/ImageGrid.vue";
import {libraryCards}  from "@/data.ts" ;
export default {
  name: "Mood",
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
      cards : libraryCards.Mood,
      currentIndex: 0,
      currentId: "",
      discussion: "basket",
    };
  },

  methods: {
    addItemToDialogBox(card) {
      this.$store.commit('addElementToBasket', card);
    },
    removeItemFromBasket() {
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
  margin-left: 17%;
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

/* we chose not to show the dialog on this screen. It can be added by changing the display*/
footer{ 
  display: none;
  }

</style>