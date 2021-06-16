<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageWithSecondNavBar @cancelLastAction="removeItemFromDialogBox">
        <main>
          <div class="text">Terminez votre phrase</div>
          <GridPonctuation class="grid">
            <div class="finPhrase">
              <div id="point">
                <div
                  :id="id"
                  @click="
                    [clearBasket($store.basket), router.push(`/startTalking`)]
                  "
                >
                  <img src="@/assets/affirmation.png" />
                </div>
              </div>
              <div id="interrogation">
                <div
                  :id="id"
                  @click="
                    [clearBasket($store.basket), router.push(`/startTalking`)]
                  "
                >
                  <img src="@/assets/question.png" />
                </div>
              </div>
            </div>
          </GridPonctuation>
        </main>

        <footer>
          <Basket class="centeringClass">
            <Card
              v-for="(card, index) in basket"
              :image="card[imageProperty]"
              :description="card.word"
              :key="index"
            />
          </Basket>
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
import GridPonctuation from "@/components/GridPonctuation.vue";
import { rootAPI, rootHebergementImage, relationTest } from "@/data.ts";
import Defilement from "@/plugins/defilement.js";
//   import GridLoader from 'vue-spinner/src/GridLoader.vue';

export default {
  name: "Recap",
  mixins: [Defilement],
  components: {
    IonPage,
    IonContent,
    PageWithSecondNavBar,
    Card,
    Basket,
    GridPonctuation,
    //   GridLoader
  },

  props: {
    loadingGrid: {
      type: String,
      default: "loadingGrid",
    },
  },

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
      color: "#00b9ff",
      loading: true,
      size: "40px",
    };
  },

  methods: {
    addItemToDialogBox(card) {
      this.$store.commit("addElementToBasket", card);
    },
    removeItemFromDialogBox() {
      this.$store.commit("removeElementFromBasket");
    },
    doAction(card) {
      this.addItemToDialogBox(card);
      this.switchDef();
      this.fetchTheCardsAndStoreThem(card.id, card.word);
      this.loading = !this.loading;
      // TODO: Ne plus envoyer le nom de la card pour le fetch, mais le nom de la relation
    },
    fetchTheCardsAndStoreThem(id, relation) {
      this.cardJSON = [];
      const url = this.rootAPI + "mots/" + id + "/" + this.relation;
      //TODO , changer this.relation par la relation réélle de l'api
      fetch(url, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((cards) => {
          const newCards = cards.map((c) => {
            c[this.imageProperty] = this.rootIMG + c[this.imageProperty];
            return c;
          });
          this.cardJSON = newCards;
        })
        .then(() => {
          this.loading = !this.loading;
        })
        .catch((err) => {
          console.error(err);
        });
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
.text {
  font-family: "Fredoka One", cursive;
  color: #6593aa;
  font-size: 2.5em;
  text-align: center;
  margin-top: 0.25em;
}

.finPhrase {
  display: flex;
  width: 16em;
}

.grid {
  justify-content: center;
  margin-top: 4em;
  /* margin-left: 1em; */
}

#point {
	margin-right: 3em;
}

.centeringClass {
  margin: auto auto auto auto;
  width: 80%;
  /* position: absolute; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* justify-content: center; */
}

/* .v-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    width: 100px;
    height: 100px;
  } */

>>> .selected img {
  transform: scale(1.03);
  box-shadow: 0px 0px 0px 7px #202abb9d;
  -webkit-box-shadow: 0px 0px 0px 7px #202abb9d;
  -moz-box-shadow: 0px 0px 0px 7px #202abb9d;
  border-radius: 30%;
}
</style>
