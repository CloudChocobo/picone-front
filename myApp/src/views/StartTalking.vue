<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<PageWithSecondNavBar
          @cancelLastAction="removeItemFromDialogBox" @clicked="clearInterval">
        <main>
					<div class="text">Cliquez sur une icône :</div>
					<ImageGrid class="grid">
						<Card
							v-for="(card, index) in cardJSON"
							:image="card[imageProperty]"
							:description="card.word"
							:key="index"
              :indexDef = 0
              :class="classObjectDef"
							@click="doAction(card)"
						/>
            <grid-loader :class="loadingGrid" :loading="loading" :color="color" :size="size"></grid-loader>
					</ImageGrid>

				</main>

				<footer>
					<div class="rectangle_discussion">
					<Basket class="centeringClass">
						<Card
							v-for="(card, index) in basket"
							:image="card[imageProperty]"
							:description="card.word"
							:key="index"
						/>
					</Basket>
					</div>
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
    name: "StartTalking",
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
      loadingGrid: {
        type: String,
        default: "loadingGrid"
      },
    },

    setup() {
      const router = useRouter();
      return {router};
    },


   async mounted() {
      await this.fetchTheCardsAndStoreThem("57");
      // this.clearBasket();
    },

    data: () => {
      return {
        imageProperty: "imgUrl",
        rootIMG: rootHebergementImage,
        rootAPI: rootAPI,
        relation: relationTest,
        cardJSON: [],
        // basket: [],
        currentIndex: 0,
        currentId: "",
        discussion: "basket",
        color: '#00b9ff',
        loading: true,
        size: "40px"
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
        this.loading = !this.loading
        this.$router.push('/build');
        // TODO: Ne plus envoyer le nom de la card pour le fetch, mais le nom de la relation
      },
      fetchTheCardsAndStoreThem(id) {
        this.cardJSON = [];
        const url = this.rootAPI + "mots/" + id + "/affiche";
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
  margin-top: 0.3em;
	}

  .grid {
  justify-content: center; /* For horizontal alignment */
  margin-top: 2em;
  /* /////////////////////////::  PC ::////////////////////////////////////////// */
  margin-left: 31%;
  }

  .centeringClass { 
    margin: 4em auto auto auto;
    width: 80%;
    /* position: absolute; */
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    /* justify-content: center; */
}

  .v-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    width: 100px;
    height: 100px;
  }

>>> .selected img {
  transform: scale(1.03);
  box-shadow: 0px 0px 0px 7px #202abb9d;
  -webkit-box-shadow: 0px 0px 0px 7px #202abb9d;
  -moz-box-shadow: 0px 0px 0px 7px #202abb9d;
  border-radius: 30%;
  }
  
</style>
