
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageV2 @cancelLastAction="removeItemFromPanier">
        <main>
          <div class="texte">Choisissez votre aliment.</div>
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
//import {nourriture} from "@/data.ts";
export default {
  name: "NoemieNourriture",
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
          image: "gomme.png",
          id: "gomme",
        },
      ],
      discussion: "panier",
      panier: [],
      cartes: [
        {
          image: require("/src/assets/nourriture/poulet.png"),
          description: "poulet",
        },
        {
          image: require("/src/assets/nourriture/bretzel.png"),
          description: "bretzel",
        },
        {
          image: require("/src/assets/nourriture/poisson.png"),
          description: "poisson",
        },
        {
          image: require("/src/assets/nourriture/pomme.png"),
          description: "pomme",
        },
          {
          image: require("/src/assets/nourriture/petitpois.png"),
          description: "petitpois",
        },
        {
          image: require("/src/assets/nourriture/the.png"),
          description: "thé",
        },
        {
          image: require("/src/assets/nourriture/biere.png"),
          description: "bière",
        },
        {
          image: require("/src/assets/nourriture/pain.png"),
          description: "pain",
        },
      ],
    };
  },

  methods: {
    addItemToPanier(carte) {
      this.panier.push(carte);
    },
    removeItemFromPanier() {
      //this.panier.splice(index, 1);
      this.panier.pop();
      console.log("coucou");
    },
  },
};
</script>

<style scoped>
.texte {
  display: flex;
  font-size: 50px;
  margin-left: 270px;
  color: #536974;
  position: relative;
  text-align: center;
  margin-top: 10px;
}

.footer {
  margin-left: 10%;
}

.rectangle_discussion {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
}

.bidouille {
  display: inline-block;
  width: 2%;
}

.Discussion img {
  margin-top: 1%;
  width: 17%;
}

/* .rectangle_discussion .Discussion{
  grid-template-rows: fit-content(40%);
} */
</style>