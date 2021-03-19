<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<PageWithSecondNavBar
          @cancelLastAction="removeItemFromDialogBox">
        <main>
					<div class="text">Cliquez sur un icône:</div>
					<ImageGrid>
						<Card
							v-for="(card, index) in cardJSON"
							:image="card[imageProperty]"
							:description="card.word"
							:key="index"
              :class="{
                selected: index === currentDef-3,
              }"
							@click="doAction(card)"
						/>
					</ImageGrid>
				</main>

				<footer>
					<!-- <div class="rectangle_discussion"> -->
					<Basket>
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
	import {IonPage, IonContent} from "@ionic/vue";
	import {useRouter} from "vue-router";
	import PageWithSecondNavBar from "@/components/PageWithSecondNavBar.vue";
	import Card from "@/components/Card.vue";
	import Basket from "@/components/Basket.vue";
	import ImageGrid from "@/components/ImageGrid.vue";
	import {rootAPI, rootHebergementImage, relationTest} from "@/data.ts";
	export default {
    inheritAttrs: false,
		name: "SentenceBuild",
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
      return {router};
		},


		mounted() {

      this.fetchTheCardsAndStoreThem("58", "besoins_physiologiques");
      this.initDefilement();

    },

		data: () => {
			return {
				//On Heroku => "img_url" / On Localhost => "imgUrl"
				imageProperty: "imgUrl",
				// imageProperty: "img_url",
				rootIMG: rootHebergementImage,
				rootAPI: rootAPI,
				relation: relationTest,
				cardJSON: [],
        currentIndex: 0,
				currentId: "",
				discussion: "basket",
        currentDef: -1
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
					.catch((err) => {
						console.error(err);
					});
			},

      // METHODES LIEES AUX DEFILEMENTS

      /*eslint-disable*/

      initDefilement () {

			  if (this.stateDef.enabledDefilement){
			    setInterval(() => {
            let keyDetected = ""
			      this.$store.commit("incrementCurrentDefilement");
			      this.currentDef = this.stateDef.currentDefilement;
            if(this.getKey()){
              keyDetected = this.getKey();
              console.log("mdrrrrr")
            }

          }, 1000);
			  }
      },

      getKey() {
        document.addEventListener('keypress', logKey);
        function logKey(e) {
          console.log("TOUCHE ENFONCEE >> "+ e.code);
          return e.code
        }
      },

        getCurrentCard() {
          return "lol";
        }
      },

		computed: {
			basket() {
				return this.$store.state.basket;
			},

      stateDef(){
        return this.$store.state.stateDefilement;
      },

		},
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


  >>> .selected img {
    transform: scale(1.2);
    border-radius: 55px;
    border: 10px solid #202abb9d;
  }
</style>
