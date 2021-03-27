<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<PageWithSecondNavBar
          @cancelLastAction="removeItemFromDialogBox" @clicked="clearInterval">
        <main>
					<div class="text">Cliquez sur un icône:</div>
					<ImageGrid>
						<Card
							v-for="(card, index) in cardJSON"
							:image="card[imageProperty]"
							:description="card.word"
							:key="index"
              :indexDef = 0
              :class="classObjectDef"
							@click="doAction(card)"
						/>
            <grid-loader :loading="loading" :color="color" :size="size"></grid-loader>
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

/*eslint-disable*/

	import {IonPage, IonContent} from "@ionic/vue";
	import {useRouter} from "vue-router";
	import PageWithSecondNavBar from "@/components/PageWithSecondNavBar.vue";
	import Card from "@/components/Card.vue";
	import Basket from "@/components/Basket.vue";
	import ImageGrid from "@/components/ImageGrid.vue";
	import {rootAPI, rootHebergementImage, relationTest} from "@/data.ts";
  import Defilement from '@/plugins/defilement.js';
  import GridLoader from 'vue-spinner/src/GridLoader.vue';




export default {
    name: "SentenceBuild",
    mixins: [Defilement],
    components: {
      IonPage,
      IonContent,
      PageWithSecondNavBar,
      Card,
      Basket,
      ImageGrid,
      GridLoader
      },

    props: {
      loading: {
        type: Boolean,
        default: true,
      },
      color: {
        type: String,
        default: '#5d0096'
      },
    },


    setup() {
      const router = useRouter();
      return {router};
    },


   async mounted() {
      await this.fetchTheCardsAndStoreThem("58", "besoins_physiologiques");
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
      addItemToDialogBox(card) {
        this.$store.commit("addElementToBasket", card);
      },
      removeItemFromDialogBox() {
        this.$store.commit("removeElementFromBasket");
      },
      doAction(card) {
        this.addItemToDialogBox(card);
        this.fetchTheCardsAndStoreThem(card.id, card.word);
        this.restartInterval();
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
              this.statusLoadingChanged();
            })
            .catch((err) => {
              console.error(err);
            });
      },
      statusLoadingChanged() {
        this.loading = !this.loading;
        console.log('mdr')
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
    box-shadow: 0px 0px 0px 7px #202abb9d;
    -webkit-box-shadow: 0px 0px 0px 7px #202abb9d;
    -moz-box-shadow: 0px 0px 0px 7px #202abb9d;
    border-radius: 55px;
  }
</style>
