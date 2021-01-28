<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageV3>
        <div class="container">

          <!-- Désactivation temporaire - icone de TopBar du défilement -->

          <!-- <div
            class="iconesInTopBar"
            id="firstIcones"
            v-for="(item, index) in items"
            :key="index"
            :class="{ selected: currentId === item.id }"
          >
            <img :src="require(`@/assets/${item.image}`)" alt="" />
          </div> -->
          <p>PICONE</p>
        </div>
        <!-- div "bidouille" vide servant simplement au placement de la classe "icone" (créee une marge) -->
        <div class="bidouille"></div>
        <div
          class="icone">
          <img src= "@/assets/Conversation.png" @click="() => router.push('/humeur')"/>
          <img src= "@/assets/boutonMenu.png" @click="() => router.push('/adminAccueil')"/>
<!--           
          v-for="(choice, index) in choices"
          :key="index"
          :class="{ selected: currentId === choice.id }"
        > -->

      <!-- <img :src="require(`${niveaubonus}${choice.image}`)" alt="" />    -->
        <!-- <img :src="require(`@/assets/${choice.image}`)" alt="" /> -->
        </div>
      </PageV3>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";
import PageV3 from "@/components/PageV3.vue";

export default {
  name: "Accueil",
  props: ["class"],

  components: {
    IonPage,
    IonContent,
    PageV3,
  },

  data() {
    return {

// Désactivation temporaire - icone de TopBar du défilement

      // currentIndex: 0,
      // currentId: "",

// Désactivation temporaire - icone de TopBar du défilement
      
      // items: [
      //   {
      //     image: "IconeMenu.png",
      //     id: "IconeMenu",
      //   },
      //   {
      //     image: "effacerPhrase.png",
      //     id: "effacerPhrase",
      //   },
      // ],
      //niveaubonus : "https://niveaubonus.fr/picone/src/icones/",
      choices: [
        {
          image: "Conversation.png",
          id: "Conversation",
        },
        {
          image: "boutonMenu.png",
          id: "BoutonMenu",
        },
      ],
    };
  },
  methods: {

// Désactivation temporaire - icone de TopBar du défilement

    // startLoop() {
    //   const selectables = this.items.concat(this.choices);
    //   setInterval(() => {
    //     this.currentIndex++;
    //     if (this.currentIndex > selectables.length - 1) {
    //       this.currentIndex = 0;
    //     }
    //     this.currentId = selectables[this.currentIndex].id;
    //   }, 1500);
    // },

    methodRouter() {
      this.router.push("/humeur");
      // faire un if this.currentId === Truc
      // this.router.push...
    },

    startEventListener() {
      window.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          this.methodRouter();
          // this.methodRouter(this.currentId);
        }
      });
    },
  },

  setup() {
    const router = useRouter();
    return { router };
  },

  mounted() {

// Désactivation temporaire - icone de TopBar du défilement

    // this.startLoop();
    this.startEventListener();
  },
};
</script>

<style scoped>
.container {
  font-size: 45px;
  color: #536974;
  text-align: center;
}

.bidouille {
  display: inline-block;
  width: 35%;
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
  left: -447px;
  display: inline;
}

p {
  position: relative;
  top: -40px;
}

.icone {
  display: inline;
  position: relative;
  top: -50px;
}

img {
  max-width: 15%;
  margin-right: 2%;
  border-radius: 55px;
}

img :hover {
  transform: scale(1.2);
  border-radius: 55px;
  border: 10px solid #202abb9d;
}

.selected img {
  transform: scale(1.2);
  border: 10px solid #202abb9d;
}

</style>




























































































































