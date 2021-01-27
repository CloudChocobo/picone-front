
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageV2>
        <main>
          <GrilleImage>
          <Carte
            v-for="(carte, index) in cartes"
            :image="carte.image"
            :description="carte.description"
            :key="index"
            @click="addItemToPanier(carte)"
          />
          </GrilleImage>
        </main>
        
        <footer>
          <!-- <div class="rectangle_discussion"> -->
            <Panier>
              <Carte
                v-for="(carte, index) in panier"
                :image="carte.image"
                :description="carte.description"
                :key="index"
                @click="removeItemFromPanier(index)"
              />
            </Panier>
          <!-- </div> -->
        </footer>

      </PageV2>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";

import PageV2 from "@/components/PageV2.vue";
import Carte from "@/components/Carte.vue";
import Panier from "@/components/Panier.vue";
import GrilleImage from "@/components/GrilleImage.vue";
export default {
  name: "ModalTest",
  components: {
    IonPage,
    IonContent,
    PageV2,
    Carte,
    Panier,
    GrilleImage,
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
      discussion: "panier",
      panier: [],
      cartes: [
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
    addItemToPanier(carte) {
      this.panier.push(carte);
    },
    removeItemFromPanier(index) {
      this.panier.splice(index, 1);
    },
  },

};
</script>

<style scoped>
.texte {
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