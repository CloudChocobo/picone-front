
<!--<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageWithSecondNavBar>
        <main>
          <ImageGrid>
          <Card
            v-for="(card, index) in cards"
            :image="card.image"
            :description="card.description"
            :key="index"
            @click="addItemToDialogBox(card)"
          />
          </ImageGrid>
        </main>
        
        <footer>
          <!-- <div class="rectangle_discussion"> -->
           <!-- <Basket>
              <Card
                v-for="(card, index) in basket"
                :image="card.image"
                :description="card.description"
                :key="index"
                @click="removeItemFromDialogBox(index)"
              />
            </Basket>
          <!-- </div> -->
        <!--</footer>

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
import ImageGrid from "@/components/ImageGrid.vue";
export default {
  name: "ModalTest",
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
    return { router };
  },

  data: () => {
    return {
      currentIndex: 0,
      currentId: "",
      items: [
        {
          image: "IconeMenu.png",
          id: "IconeMenu",
        },
        {
          image: "effacerPhrase.png",
          id: "effacerPhrase",
        },
      ],
      discussion: "basket",
      basket: [],
      cards: [
        {
          description: "bien",
          image: require("/src/assets/bien.png"),
        },
        {
          description: "moyen",
          image: require("/src/assets/moyen.png"),
        },
        {
          description: "triste",
          image: require("/src/assets/triste.png"),
        },
        {
          description: "enerve",
          image: require("/src/assets/enerve.png"),
        },
      ],
    };
  },

  methods: {
    addItemToDialogBox(card) {
      this.basket.push(card);
    },
    removeItemFromDialogBox(index) {
      this.basket.splice(index, 1);
    },
  },

};
</script>

<style scoped>
.text {
  display: flex;
  font-size: 50px;
  margin-left: 340px;
  color: #536974;
  position: relative;
  text-align: center;
  margin-top: 10px;
}

.footer {
  margin-left: 10%;
}
.rectangle_discussion {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
}
.rectangle_discussion .Discussion {
  grid-template-rows: fit-content(100%);
}
data {
  visibility: collapse;
  display: block;
  width: 400%;
  grid-gap: 10px;
  grid-auto-rows: 10px;
}
.container {
  font-size: 45px;
  color: #536974;
  text-align: center;
  /* margin-top: 60px; */
}

</style>