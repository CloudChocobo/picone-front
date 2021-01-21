<template>
  <Page>
    <div class="texte">
      <p>Projet PICONE</p>
    </div>
    <div class="container">
      <div class="icone" @click="() => router.push('/humeur')">
        <img src="../assets/Conversation.png" alt="" />
      </div>

      <div class="icone1" @click="() => router.push('/adminAccueil')">
        <img src="../assets/IconeParam.png" alt="" />
      </div>
    </div>
  </Page>
</template>

<script>
import Page from "@/components/Page.vue";
import { useRouter } from "vue-router";
export default {
  name: "Accueil",
  components: {
    Page,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
};
</script>

<style scoped>
.icone1 {
  text-align: center;
  float: left;
  margin: auto;
  gap: 10px;
  width: 25%;
}
.icone {
  text-align: center;
  align-items: center;
  display: inline-block;
  margin-left: 18%;
  width: 25%;
}
.container {
  text-align: center;
  align-items: center;
  list-style-type: none;
  flex-wrap: wrap;
  display: flex;
  margin-top: 110px;
}
.texte {
  display: flex;
  font-size: 50px;
  margin-left: 350px;
  color: #536974;
  position: relative;
  text-align: center;
  margin-top: 10px;
}
</style>
