<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageWithFirstNavBar>
        <main>
          <div class="text">Comment vous sentez vous ?</div>
          <ImageGridMood class="grid">
            <CardMood
              v-for="(card, index) in cardJSON"
              :image="card[imageProperty]"
              :description="card.word"
              :key="index"
              @click="doAction(card)"
            />
          </ImageGridMood>
        </main>

        <footer>
          <div class="rectangle_discussion">
            <Basket>
              <Card
                v-for="(card, index) in basket"
                :image="card.image"
                :description="card.description"
                :key="index"
              />
            </Basket>
          </div>
        </footer>
      </PageWithFirstNavBar>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";
import PageWithFirstNavBar from "@/components/PageWithFirstNavBar.vue";
import CardMood from "@/components/CardMood.vue";
import Basket from "@/components/Basket.vue";
import ImageGridMood from "@/components/ImageGridMood.vue";
import { rootAPI, rootHebergementImage, labelTest } from "@/data.ts";
import Defilement from "@/mixins/defilement";
export default {
  name: "Mood",
  mixins: [Defilement],
  components: {
    IonPage,
    IonContent,
    PageWithFirstNavBar,
    CardMood,
    Basket,
    ImageGridMood,
  },
  props: [],
  setup() {
    const router = useRouter();
    return { router };
  },

  mounted() {
    // Quand la page démarre:
    this.fetchTheCardMood("moods");
    // Pour remettre à zéro le "MoodState" et pouvoir en changer à chaque fois que l'on retourne sur la page "Mood".
    this.clearMood();
  },

  data: () => {
    return {
      //On Heroku => "img_url" / On Localhost => "imgUrl"
      imageProperty: "imgUrl",
      // imageProperty: "img_url",
      rootIMG: rootHebergementImage,
      rootAPI: rootAPI,
      label: labelTest,
      cardJSON: [],
      currentIndex: 0,
      currentId: "",
      discussion: "basket",
    };
  },

  methods: {
    addItemToDialogBox(card) {
      this.$store.commit("addElementToBasket", card);
    },
    removeItemFromBasket() {
      this.$store.commit("removeElementFromBasket");
    },

    displayMoodOnDiscussion(card) {
      this.$store.commit("setMoodState", card);
    },

    clearMood() {
      this.$store.commit("clearMood");
    },

    doAction(card) {
      // this.$router.push('/build');
      this.$router.push("/startTalking");
      this.displayMoodOnDiscussion(card);
    },

    fetchTheCardMood() {
      this.cardJSON = [];
      // console.log(label);
      const url = this.rootAPI + "moods";

      console.log("url :>> ", url);

      fetch(url, {
        method: "GET",
      })
        .then((response) => {
          console.log("response :>> ", response);
          return response.json();
        })
        .then((cards) => {
          const newCards = cards.map((c) => {
            c[this.imageProperty] = this.rootIMG + c[this.imageProperty];
            return c;
          });
          this.cardJSON = newCards;
          console.log("cards :>> ", cards);
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
    mood() {
      return this.$store.getters.mood;
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
  margin-top: 0.3em;
}

.grid {
  justify-content: center;
  margin-top: 1.5em;
}

footer {
  display: none;
}

/* CSS pour le défilement */
>>> .selected img {
  transform: scale(1.03);
  box-shadow: 0px 0px 0px 7px #202abb9d;
  -webkit-box-shadow: 0px 0px 0px 7px #202abb9d;
  -moz-box-shadow: 0px 0px 0px 7px #202abb9d;
  /* border-radius: 55px; */
  border-radius: 30%;
}

@media (max-width: 1300px) {
  .grid {
    margin-top: 2.5em;
  }
}

@media (min-width: 1300px) and (min-height: 1000px) {
  .text {
    font-size: 3.5em;
  }

  .grid {
    margin-top: 2.5em;
  }
}
</style>