<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageWithHomeNavBar>
        <div class="container">
          <!-- Désactivation temporaire - icone de TopBar du défilement / pour Kévin et Marvin à faire -->

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

        <div class="icone">
          <img
            src="@/assets/Conversation.png"
            @click="() => router.push('/Mood')"
          />
          <img
            src="@/assets/boutonMenu.png"
            @click="() => router.push('/adminHome')"
          />
          <!--           
          v-for="(choice, index) in choices"
          :key="index"
          :class="{ selected: currentId === choice.id }"
        > -->

          <!-- <img :src="require(`${niveaubonus}${choice.image}`)" alt="" />    -->
          <!-- <img :src="require(`@/assets/${choice.image}`)" alt="" /> -->
        </div>
      </PageWithHomeNavBar>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";
import PageWithHomeNavBar from "@/components/PageWithHomeNavBar.vue";

export default {
  name: "Home",
  props: ["class"],

  components: {
    IonPage,
    IonContent,
    PageWithHomeNavBar,
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
      this.router.push("/Mood");
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
  font-family: "Fredoka One", cursive;
  color: #6593aa;
  font-size: 4em;
  text-align: center;
  margin-top: -0.3em;
}

.icone {
  margin-top: -1.5em;
  display: flex;
  justify-content: center; /* For horizontal alignment */
  align-items: center; /* For vertical alignment */
}

img {
  max-width: 10em;
  margin-right: 1%;
  margin-left: 1%;
  border-radius: 2em;
}

@media (max-width: 1100px) {
  .container {
    margin-top: 1.3em;
    margin-bottom: 1.3em;
  }

  .icone {
    margin-top: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 13em;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 2em;
  }
}
</style>




























































































































