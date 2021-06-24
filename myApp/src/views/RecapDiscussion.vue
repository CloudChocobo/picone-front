    
    <!-- View obsolete à supprimer -->

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageWithSecondNavBar @cancelLastAction="removeItemFromDialogBox">
        <div class="container">
          <div class="text">Voici votre phrase</div>
          <!-- div "invisibleBlockAlignment" . Empty space  used only to align the 'icone' class, creating a margin-->
          <div class="invisibleBlockAlignment"></div>
          <div class="home">
            <div
              :id="id"
              @click="
                [clearBasket($store.basket), router.push(`/startTalking`)]
              "
            >
              <img src="@/assets/home.png" />
            </div>
          </div>
        </div>
        <footer>
          <!-- <div class="rectangle_discussion"> -->
          <Basket class="centeringClass">
            <Card
              v-for="(card, index) in basket"
              :image="card[imageProperty]"
              :description="card.word"
              :key="index"
            />
          </Basket>
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
import Basket from "@/components/Basket.vue";
import { rootAPI, rootHebergementImage, relationTest } from "@/data.ts";

export default {
  name: "RecapDiscussion",
  components: {
    IonPage,
    IonContent,
    PageWithSecondNavBar,
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
      imageProperty: "imgUrl",
      rootIMG: rootHebergementImage,
      rootAPI: rootAPI,
      relation: relationTest,
      cardJSON: [],
      currentIndex: 0,
      currentId: "",
      discussion: "basket",
    };
  },

  methods: {
    methodRouter() {
      this.router.push("/startTalking");
    },
    clearBasket() {
      this.$store.commit("clearBasket", this.$store.basket);
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
    basket() {
      return this.$store.state.basket;
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
</style>