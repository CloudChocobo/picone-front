
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Page>
        <div class="texte">test test</div>
        <main>
          <Carte
            v-for="(carte, index) in cartes"
            :image="carte.image"
            :description="carte.description"
            :key="index"
            @click="addItemToPanier(carte)"
          />
        </main>
        <footer>
          <div class="boite_discussion">
            <Panier>
              <Carte
                v-for="(carte, index) in panier"
                :image="carte.image"
                :description="carte.description"
                :key="index"
                @click="removeItemFromPanier(index)"
              />
            </Panier>
          </div>
        </footer>
      </Page>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent} from "@ionic/vue";
import { useRouter } from "vue-router";
import Page from "@/components/Page.vue";
import Carte from "@/components/Carte.vue";
import Panier from "@/components/Panier.vue";
export default {
  name: "Noemie",
  components: {
    IonPage,
    IonContent,
    Page,
    Carte,
    Panier,
  
  },
  props: [],
  setup() {
    const router = useRouter();
    return { router };
  },

  data: () => {
    return { 
      discussion: "panier",
      panier: [],
      cartes: [ 
          {
            description: "bien",
            image: require('/src/assets/bien.png'),
          },
          {
            description:"moyen",
            image : require('/src/assets/moyen.png'),
          },
          {
            description: "triste",
            image: require('/src/assets/triste.png'),
          },
          {
            description:"enerve",
            image : require('/src/assets/enerve.png'),
          },
      ]
    };
  },
  
  
  methods: {
    addItemToPanier(carte) {
      this.panier.push(carte);
    },
    removeItemFromPanier(index) {
      this.panier.splice(index , 1);
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
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
}
.cartes {
  display: grid;
  grid-template: 1fr 2fr;
  
}
</style>