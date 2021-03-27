<template>
<ion-page>
    <ion-content :fullscreen="true">
      <PageWithFirstNavBar>
        <main>
          <div class="text">Comment vous sentez vous?</div>
          <ImageGrid>
            <CardMood
							v-for="(card, index) in cardJSON"
							:image="card[imageProperty]"
							:description="card.word"
							:key="index"
							@click="doAction(card)"
            />
          </ImageGrid>
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
import ImageGrid from "@/components/ImageGrid.vue";
	import {rootAPI, rootHebergementImage, labelTest} from "@/data.ts";
export default {
  name: "Mood",
  components: {
    IonPage,
    IonContent,
    PageWithFirstNavBar,
    CardMood,
    Basket,
    ImageGrid,
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
      this.$store.commit('addElementToBasket', card);
    },
    removeItemFromBasket() {
      this.$store.commit('removeElementFromBasket');
    },

    displayMoodOnDiscussion(card) {
      this.$store.commit('setMoodState', card);
    },

    clearMood() {
      this.$store.commit('clearMood');
    },

    doAction(card){
      this.$router.push('/build');
      this.displayMoodOnDiscussion(card);
      //this.fetchTheCardMood(card.id, card.word);
      // if(card.redirectsTo){
      //   this.$router.push("/"+card.redirectsTo);
      // } else {
      //   this.addItemToDialogBox(card);
      // }
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
       return this.$store.state.basket
       },
      mood() {
        return this.$store.getters.mood
      },
     }
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