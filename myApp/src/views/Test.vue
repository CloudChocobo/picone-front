<template>
  <Page>
    <div class="texte">Veuillez commencer votre phrase.</div>
    <div class="container">
      <Image label="Je">
        <div class="icone" @click="() => router.push('/action')">
          <img src="../assets/je.png" alt="je" />
        </div>
      </Image>
      <Image>
        <div class="tu">tu</div>
        <div class="icone1" @click="() => router.push('/action')">
          <img src="../assets/tu.png" alt="tu" />
        </div>
      </Image>
    </div>
  </Page>
</template>

<script>
import { useRouter } from "vue-router";
import Page from "@/components/Page.vue";
import Image from "@/components/Image.vue";
export default {
  name: "JeTu",
  components: {
    Page,
    Image,
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
  margin-left: 180px;
  color: #536974;
  position: relative;
  text-align: center;
}
</style>

