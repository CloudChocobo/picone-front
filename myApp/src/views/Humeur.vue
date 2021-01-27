<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageV2>
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
          <p>
            Bonjour<br />
            Comment vous sentez-vous?
          </p>
        </div>
        <!-- div "bidouille" vide servant simplement au placement de la classe "icone" (créee une marge) -->
        <div class="bidouille"></div>
        <div
          class="icone"
          @click="() => router.push('/jeTu')"
          v-for="(mood, index) in moods"
          :key="index"
          :class="{ selected: currentId === mood.id }"
        >
          <img :src="require(`@/assets/${mood.image}`)" alt="" />
        </div>
      </PageV2>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";
import PageV2 from "@/components/PageV2.vue";
export default {
  name: "Humeur",
  props: ["class"],

  components: {
    IonPage,
    IonContent,
    PageV2,
  },

  data() {
    return {

// Désactivation temporaire - icone de TopBar du défilement

      // currentIndex: 0,
      // currentId: "",
      // items: [
      //   {
      //     image: "IconeMenu.png",
      //     id: "IconeMenu",
      //   },
      //   {
      //     image: "effacerPhrase.png",
      //     id: "effacerPhrase",
      //   },
      //   {
      //     image: "Back.png",
      //     id: "Back",
      //   },
      // ],
      moods: [
        {
          image: "bien.png",
          id: "bien",
        },
        {
          image: "moyen.png",
          id: "moyen",
        },
        {
          image: "triste.png",
          id: "triste",
        },
        {
          image: "enerve.png",
          id: "enerve",
        },
      ],
    };
  },

  methods: {

// Désactivation temporaire - icone de TopBar du défilement

    // startLoop() {
    //   const selectables = this.items.concat(this.moods);
    //   setInterval(() => {
    //     this.currentIndex++;
    //     if (this.currentIndex > selectables.length - 1) {
    //       this.currentIndex = 0;
    //     }
    //     this.currentId = selectables[this.currentIndex].id;
    //   }, 1500);
    // },

    methodRouter() {
      if (this.currentId === "Back") {
        this.router.go(-1);
      } else {
        this.router.push("/jeTu");
      }
    },
    // methodRouter(id) {
    //   console.log(id);
    //   this.router.push("/jeTu");
    // },

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
  left: -447px;
  /* left: -400px; */
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
</style>
