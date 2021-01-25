<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Page>
        <div class="container">
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
          @keyup.enter="methodRouter"
          v-for="(mood, index) in moods"
          :key="index"
          :class="{ selected: current === index }"
        >
          <img :src="require(`@/assets/${mood.image}`)" alt="" />
        </div>
        <!-- <div id="validation">
        <input @keypress.enter="methodRouter" />
        </div> -->
      </Page>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";
import Page from "@/components/Page.vue";
export default {
  name: "Humeur",
  props: ["class"],

  components: {
    IonPage,
    IonContent,
    Page,
  },

  data() {
    return {
      current: 0,
      moods: [
        {
          image: "bien.png",
        },
        {
          image: "moyen.png",
        },
        {
          image: "triste.png",
        },
        {
          image: "enerve.png",
        },
      ],
    };
  },

  methods: {
    startLoop() {
      setInterval(() => {
        this.current++;
        if (this.current > this.moods.length - 1) {
          this.current = 0;
        }
      }, 1500);
    },
    methodRouter() {
      this.router.push("/jeTu");
    },
    // icone.addEventListener('keyPress', (pressInput)=> {
    //   if(keyPress.key === enter){
    //     selecCurrent.action();
    //   };
    // }),
  },

  setup() {
    const router = useRouter();
    return { router };
  },

  mounted() {
    this.startLoop();
    // window.addEventListener("keyup", (event) => {
    //   if (event.keyCode === 13) {
    //     this.methodRouter();
    //   }
    // });
  },
};
</script>

<style scoped>

.container {
  font-size: 50px;
  color: #536974;
  text-align: center;
  margin-top: 60px;
}

.bidouille {
  display: inline-block;
  width: 17%;
}

.icone {
  display: inline;
  position: relative;
}

img {
  max-width: 15%;
  margin-top: 5%;
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

#validation {
  display: none;
}
</style>
