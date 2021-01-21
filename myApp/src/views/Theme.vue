<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Page>
        <div class="texte">Choisissez votre thème.</div>
        <div class="container">
          <GrilleImage>
            <div class="icone" @click="() => router.push('/nourriture')">
              <img src="../assets/nourriture/nourriture.png" alt="nourriture" />
            </div>
            <div class="icone" @click="() => router.push('/nourriture')">
              <img src="../assets/médical/médical.png" alt="médical" />
            </div>
            <div class="icone" @click="() => router.push('/nourriture')">
              <img src="../assets/hygiène/hygiene.png" alt="hygiène" />
            </div>
            <img src="../assets/enervé.png" alt="enervé" />
            <img src="../assets/bien.png" alt="bien" />
            <img src="../assets/moyen.png" alt="moyen" />
            <img src="../assets/triste.png" alt="triste" />
            <img src="../assets/enervé.png" alt="enervé" />
          </GrilleImage>
        </div>
        <footer>
          <div class="rectangle_discussion">
            <Discussion>poulet</Discussion>
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
  name: "Thème",
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

.footer {
  margin-left: 10%;
}
.rectangle_discussion {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
}
</style>

