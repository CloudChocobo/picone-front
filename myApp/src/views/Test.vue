<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageV2>
      <header>
        <BarreNavHorizontaleV2>
          <MenuBurger></MenuBurger>
          <Gomme>
             <Panier>
              <Carte
            v-for="(carte, index) in panier"
                :image="carte.image"
                :description="carte.description"
                :key="index"
                @click="removeItemFromPanier(index)"
              />
              </Panier>
          </Gomme>
          <BackButton></BackButton>
        </BarreNavHorizontaleV2>
      </header>
        <!-- <div class="container">
          <div
            class="iconesInTopBar"
            id="firstIcones"
            v-for="(item, index) in items"
            :key="index"
            :class="{ selected: currentId === item.id }"
          >
            <img :src="require(`@/assets/${item.image}`)" alt="" />
          </div>
           </div> -->
           <main>          
            <h1>
            Bonjour<br />
            Etes vous déprimé? Voulez-vous être vendredi soir? 
          </h1>
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
          <div class="rectangle_discussion">
            <Panier>
              <Carte
                v-for="(carte, index) in panier"
                :image="carte.image"
                :description="carte.description"
                :key="index"/>
                <!-- @click="removeItemFromPanier(index)" -->
              
            </Panier>
          </div>
        </footer>

       
        <!-- div "bidouille" vide servant simplement au placement de la classe "icone" (créee une marge)
        <div class="bidouille"></div>
        <div
          class="icone"
          @click="() => router.push('/jeTu')"
          v-for="(mood, index) in moods"
          :key="index"
          :class="{ selected: currentId === mood.id }"
        >
          <img :src="require(`@/assets/${mood.image}`)" alt="" />
        </div> -->
      </PageV2>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";
import PageV2 from "@/components/PageV2.vue";
import Panier from "@/components/Panier.vue";
import Carte from "@/components/Carte.vue";
import GrilleImage from "@/components/GrilleImage.vue";
import BackButton from "@/components/BackButton.vue"
import Gomme from "@/components/Gomme.vue"
import MenuBurger from "@/components/MenuBurger.vue"
export default {
  name: "Test",
  props: ["class", "Panier"],

  components: {
    IonPage,
    IonContent,
    PageV2,
    Panier,
    Carte,
    GrilleImage,
    BackButton,
    Gomme,
    MenuBurger,
   
  },

  data() {
    return {
      currentIndex: 0,
      currentId: "",
      items: [
        {
          image: "IconeMenu.png",
          id:"IconeMenu",
        },
        {
          image: "effacerPhrase.png",
          id:"effacerPhrase",
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
    //removeItemFromPanier(index) {
    //  this.panier.splice(index, 1);
    //},
    startLoop(){
      const selectables= this.items.concat(this.moods);
      setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex > selectables.length - 1) {
          this.currentIndex = 0;
        }
        this.currentId = selectables[this.currentIndex].id;
      }, 1500);
    },

    methodRouter(id) {
      console.log(id);
      this.router.push("/jeTu");
    },
  methodRemoveItemFromPanier(carte) {
    this.$emit("removeItemFromPanier", carte);
      
      }
    },

    startEventListener(){
      window.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          this.methodRouter(this.currentId);
        }
      });
    },
  

  setup() {
    const router = useRouter();
    return { router };
  },

  mounted() {
    this.startLoop();
    this.startEventListener();
  },
};
</script>

<style scoped>
.container {
  font-size: 45px;
  color: #536974;
  text-align: center;
  /* margin-top: 60px; */
}

.bidouille {
  display: inline-block;
  width: 17%;
}

div#firstIcones img {
  width: 7%;
  border-radius: 33%;
}

.iconesInTopBar {
  position: relative;
  margin: 0px;
  padding: 0px;
  top: -80px;
  left: -400px;
  display: inline;
}

p {
  position: relative;
  top: -110px;
}

.icone {
  display: inline;
  position: relative;
  top: -50px;
}

img {
  max-width: 15%;
  /* margin-top: 5%; */
  margin-right: 2%;
  border-radius: 55px;
}

img:hover {
  transform: scale(1.2);
  border-radius: 55px;
  border: 10px solid #202abb9d;
}

.selected img {
  transform: scale(1.2);
  border: 10px solid #202abb9d;
}

/* #validation {
  display: none;
} */
.BackButton{
  width: 30px;
}

.rectangle_discussion{
  margin-top:30px;
}
</style>
