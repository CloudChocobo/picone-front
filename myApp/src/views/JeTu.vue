<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <PageV2>
        <div class="container">
          <div
            class="iconesInTopBar"
            id="firstIcones"
            v-for="(item, index) in items"
            :key="index"
            :class="{ selected: currentId === item.id }"
          >
            <img :src="require(`@/assets/${item.image}`)" alt="" />
          </div>
          <p>Veuillez commencer votre phrase.</p>
        </div>
        <!-- div "bidouille" vide servant simplement au placement de la classe "icone" (créee une marge) -->
        <div class="bidouille"></div>
        <div
          class="icone"
          @click="() => router.push('/action')"
          v-for="(pronom, index) in pronoms"
          :key="index"
          :class="{ selected: currentId === pronom.id }"
        >
          <img :src="require(`@/assets/${pronom.image}`)" alt="" />
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
  name: "JeTu",
 props: ["class"],

  components: {
    IonPage,
    IonContent,
    PageV2,
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
        // {
        //   image: "effacerPhrase.png",
        //   id:"effacerPhrase",
        // },
      ],
      pronoms: [
        {
          image: "je.png",
          id:"je",
        },
        {
          image: "tu.png",
          id:"tu",
        },
      ],
    };
  },

  methods: {
    startLoop() {
      const selectables= this.items.concat(this.pronoms);
      setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex > selectables.length - 1) {
          this.currentIndex = 0;
        }
        this.currentId = selectables[this.currentIndex].id;
      }, 1500);
    },

    methodRouter() {
      // console.log(id);
      this.router.push("/action");
    },

    startEventListener(){
      window.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          this.methodRouter();
          // this.methodRouter(this.currentId);
        }
      });
    }
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
</style>

