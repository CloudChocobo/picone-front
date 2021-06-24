<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageWithSecondNavBar @cancelLastAction="removeItemFromDialogBox">
        <main>
          <div class="text">Terminez votre phrase</div>
          <GridPonctuation class="grid">
            <div class="finPhrase">
              <div id="point">
                <CardPonctuation
                  id="10"
                  image="boutonAffirmation.png"
                  @click="doAction(card)"
                />
              </div>
              <div id="interrogation">
                <CardPonctuation
                  id="11"
                  image="boutonQuestion.png"
                  @click="doAction(card)"
                />
              </div>
            </div>
          </GridPonctuation>
        </main>

        <footer>
          <BasketRecap class="centeringClass">
            <Card
              v-for="(card, index) in basket"
              :image="card[imageProperty]"
              :description="card.word"
              :key="index"
            />
          </BasketRecap>
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
import CardPonctuation from "@/components/CardPonctuation.vue";
import BasketRecap from "@/components/BasketRecap.vue";
import GridPonctuation from "@/components/GridPonctuation.vue";
import { rootAPI, rootHebergementImage, relationTest } from "@/data.ts";
import Defilement from "@/mixins/defilement.js";

export default {
  name: "Recap",
  mixins: [Defilement],
  components: {
    IonPage,
    IonContent,
    PageWithSecondNavBar,
    Card,
    CardPonctuation,
    BasketRecap,
    GridPonctuation,
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
    // methodRouter() {
    //   this.router.push("/recapDiscussion");
    // },
    addItemToDialogBox(card) {
      this.$store.commit("addElementToBasket", card);
    },
    removeItemFromDialogBox() {
      this.$store.commit("removeElementFromBasket");
    },
    doAction(card) {
      this.addItemToDialogBox(card);
      this.switchDef();
      this.loading = !this.loading;
      this.$router.push("/recapDiscussion");
      this.fetchTheCardsAndStoreThem(card.id, card.word);
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
  position: relative;
  top: 0.25em;
}

.finPhrase {
  display: flex;
  width: 16em;
}

.grid {
  justify-content: center;
  position: relative;
  top: 4em;
}

#point {
  margin-right: 3em;
}

.centeringClass {
  position: relative;
  top: 1em;
  margin: auto auto auto auto;
  width: 80%;
}

>>> .selected img {
  transform: scale(1.03);
  box-shadow: 0px 0px 0px 7px #202abb9d;
  -webkit-box-shadow: 0px 0px 0px 7px #202abb9d;
  -moz-box-shadow: 0px 0px 0px 7px #202abb9d;
  border-radius: 30%;
}

@media (max-width: 1300px) {
  img {
    max-width: 10em;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 2em;
  }

  .grid {
    position: relative;
    top: 7em;
    right: 2.2em;
  }

  .centeringClass {
    position: fixed;
    top: 77%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media (min-width: 1300px) and (min-height: 1000px) {
  .text {
    font-size: 3.5em;
  }

  img {
    max-width: 15em;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 2em;
  }

  .grid {
    position: relative;
    top: 8em;
    right: 8em;
  }

  .centeringClass {
    position: fixed;
    top: 77%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
