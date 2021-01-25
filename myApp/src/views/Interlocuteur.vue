<template>
  <Page>
    <div class="texte">
      <p>
        Bonjour<br />
        Quel est votre interlocuteur?
      </p>
    </div>
    <div class="container">
      <div class="icone" @click="() => router.push('/theme')">
        <img src="../assets/Proches.png" alt="" />
      </div>
      <div class="icone1" @click="() => router.push('/theme')">
        <img src="../assets/Medecin.png" alt="" />
      </div>
    </div>
  </Page>
</template>

<script>
import { useRouter } from "vue-router";
import Page from "@/components/Page.vue";
export default {
  name: "Interlocuteur",
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
  margin-left: 23%;

  width: 25%;
}
.container {
  text-align: center;
  align-items: center;
  list-style-type: none;
  flex-wrap: wrap;
  display: flex;
  margin-top: 100px;
}
.texte {
  display: flex;
  font-size: 50px;
  margin-left: 250px;
  color: #536974;
  position: relative;
  text-align: center;
  margin-top: 10px;
}
</style>

