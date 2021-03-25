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
	export default {
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


   async mounted() {

      await this.fetchTheCardsAndStoreThem("58", "besoins_physiologiques");
      await this.startDefilement()
     this.$el.addEventListener("clicked", () => clearInterval(this.interval))
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
        currentDef: -1,
        currentInput : "",
        lengthDef: 0,
        interval: ""
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
            .catch((err) => {
              console.error(err);
            });
      },


      //*************************************************************************************
      // ******************** METHODES LIEES AUX DEFILEMENTS ********************************
      //*************************************************************************************

      listAllDivForDef(){
        let elements = document.getElementsByClassName("defFriendly");
        this.lengthDef = elements.length

        for(let i=0; i<elements.length; i++) {
          elements[i].setAttribute( "indexdef",i);
        }

        return elements;
      },

      checkIfCurrentCorrespondToDefIndex( currentDefilement , elements ) {
        const elementAtIndex = elements[currentDefilement];
        return elementAtIndex  && currentDefilement.toString() === elementAtIndex.getAttribute("indexdef");
      },

      changeDirectly(){
        let elements = this.listAllDivForDef();
        let bool = this.checkIfCurrentCorrespondToDefIndex( this.currentDef, elements);
        if(bool) {
          elements[this.currentDef].classList.add("selected")
        }
      },

      resetSelectedClass( currentDefilementIndex ){
        if(currentDefilementIndex >= 0){
          let elements = this.listAllDivForDef();
          elements[currentDefilementIndex].classList.remove("selected")
        }
      },

      startDefilement() {
        if (this.stateDef.enabledDefilement) {
            this.interval = setInterval(() => {

            this.listAllDivForDef();
            this.currentDef = this.stateDef.currentDefilement;
            this.changeDirectly();
            this.$store.commit("incrementCurrentDefilement");
            this.keyListener()
            this.keyCheck(this.currentInput);
              this.currentInput = "None";

            if ( this.currentDef  == this.lengthDef){
               this.stateDef.currentDefilement = 0
              this.resetSelectedClass(this.lengthDef-1)
            } else {
              this.resetSelectedClass(this.currentDef-1)
            }

          }, this.stateDef.speedDefilement)
        }
      },

      keyListener() {
       document.addEventListener('keydown', (e) => {
         console.log(e.code)
         this.currentInput = e.code;
        })
      },

      keyCheck(k) {
        if (k === this.stateDef.activeKey) {
          let key = this.currentDef-1;
          this.restartInterval()
          console.log(k + " appuyé lorsque la div "+ key +" fut active")
          this.keyCompute(key)
          return this.currentDef;
        }
      },

      keyCompute( number ){
        const targetDiv = document.getElementsByClassName("defFriendly")[number]
        //const targetDiv = document.querySelector("[defFriendly=number]")
        targetDiv.click();
        console.log(targetDiv)
      },

      stopInterval() {
        clearInterval(this.interval);
      },

      restartInterval(){
        clearInterval(this.interval)
        this.startDefilement()
      }
    },


      computed: {
        basket() {
          return this.$store.state.basket;
        },

        stateDef() {
          return this.$store.state.stateDefilement;
        },

        classObjectDef() {
          return {
            selected: false,
            defFriendly: true
          }
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
