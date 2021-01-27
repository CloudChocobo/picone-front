<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Page>
        <div class="texte">Choisissez votre action.</div>
        <div class="container">
          <GrilleImage>
            <div class="icone" @click="() => router.push('/nourriture')">
              <img src="../assets/action/caca.png" alt="WC" />
            </div>
            <div class="icone" @click="() => router.push('/nourriture')">
              <img src="../assets/action/seLaver.png" alt="seLaver" />
            </div>
            <div class="icone" @click="() => router.push('/nourriture')">
              <img src="../assets/action/manger.png" alt="nourriture" />
            </div>
            <div class="icone" @click="() => router.push('/nourriture')">
              <img src="../assets/action/dormir.png" alt="dormir" />
            </div>

          </GrilleImage>
        </div>
        <footer>
          <div class="rectangle_discussion">
            <Discussion></Discussion>
          </div>
        </footer>
      </Page>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";
import Page from "@/components/Page.vue";
import Discussion from "@/components/Discussion.vue";
import GrilleImage from "@/components/GrilleImage.vue";
export default {
  name: "Action",
  components: {
    IonPage,
    IonContent,
    Page,
    GrilleImage,
    Discussion,
  },
  setup() {
    const router = useRouter();
    return { router };
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

/* .icone {
  margin-right: -90px;
  margin-bottom: -15px;
} */

img {
  /* max-width: 55%;
  margin-top: 5%;
  margin-right: 2%; */
  /* width: 10%; */
  border-radius: 55px;
}

.footer {
  margin-left: 10%;
}
.rectangle_discussion {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;

  /* font-size: 50px;
  color: #536974; */
}
</style>

