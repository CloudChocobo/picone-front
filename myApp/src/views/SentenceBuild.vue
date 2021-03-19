<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<PageWithSecondNavBar2 @cancelLastAction="removeItemFromDialogBox">
				<main>
					<div class="text">Cliquez sur un icône:</div>
					<ImageGrid>
						<Card
							v-for="(card, index) in cardJSON"
							:image="card[imageProperty]"
							:description="card.word"
							:key="index"
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
			</PageWithSecondNavBar2>
		</ion-content>
	</ion-page>
</template>

<script>
	import {IonPage, IonContent} from "@ionic/vue";
	import {useRouter} from "vue-router";
	import PageWithSecondNavBar2 from "@/components/PageWithSecondNavBar2.vue";
	import Card from "@/components/Card.vue";
	import Basket from "@/components/Basket.vue";
	import ImageGrid from "@/components/ImageGrid.vue";
	import {rootAPI, rootHebergementImage, relationTest} from "@/data.ts";
	export default {
		name: "SentenceBuild",
		components: {
			IonPage,
			IonContent,
			PageWithSecondNavBar2,
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
			// quand la page démarre:
			this.fetchTheCardsAndStoreThem("58", "besoins_physiologiques");
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
				console.log(relation);
				const url = this.rootAPI + "mots/" + id + "/" + this.relation;
				//TODO , changer this.relation par la relation réélle de l'api
				console.log("url :>> ", url);
				fetch(url, {
					method: "GET",
				})
					.then((response) => {
						console.log("response :>> ", response);
						return response.json();
					})
					.then((cards) => {
						console.log("Coucou les ptits amis");
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
			log() {
				return console.log(this.data.cardJSON);
			},
			basket() {
				return this.$store.state.basket;
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
</style>
