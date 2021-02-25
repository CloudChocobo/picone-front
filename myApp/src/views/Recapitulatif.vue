
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageV2 @cancelLastAction="removeItemFromDialogBox">
     <div class="container">
                <div class="text">Terminez votre phrase</div>
        <!-- div "invisibleBlockAlignment" vide servant simplement au placement de la classe "icone" (créee une marge) --><div class="invisibleBlockAlignment"></div>
         <div class="finPhrase">
             <div class="point">
                <div :id="id" @click="[clearBasket($store.panier) , router.push(`/debutPhrase`)]">
                    <img src= "@/assets/affirmation.png" />
                </div>
            </div>
            <div class="interrogation">
                <div :id="id" @click="[clearBasket($store.panier) , router.push(`/debutPhrase`)]" >
                    <img src= "@/assets/question.png"  />
                </div>
            </div>
          </div>
          </div>
       

        <footer>
          <!-- <div class="rectangle_discussion"> -->
          <Basket>
            <Card
              v-for="(card, index) in panier"
              :image="card.image" 
              :description="card.description" 
              :key="index"
            />
          </Basket>
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
import Card from "@/components/Card.vue";
import Basket from "@/components/Basket.vue";
import { libraryCards } from "@/data.ts";

export default {
  name: "Recapitulatif",
  components: {
    IonPage,
    IonContent,
    PageV2,
    Card,
    Basket,
    
  },
  props: [],
  setup() {
    const router = useRouter();
    return { router };
  },

  data: () => {
    return {
      cards: libraryCards.nourriture,
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
    clearBasket() {
      this.$store.commit("clearBasket", this.$store.panier);
    },

    addItemToDialogBox(card) {
      this.$store.commit("addElementToBasket", card);
    },
    removeItemFromDialogBox() {
      this.$store.commit("removeElementFromBasket");
    },
    doAction(card) {
      if (card.redirectsTo) {
        this.$router.push("/" + card.redirectsTo);
      } else {
        this.addItemToDialogBox(card);
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

.invisibleBlockAlignment {
  display: inline-block;
  width: 2%;
}
img {
  max-width: 15%;
  margin-right: 2%;
  border-radius: 55px;
}
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