
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header>
        <BarreNavHorizontaleV2>
          <MenuBurger></MenuBurger>
          <Gomme></Gomme>
          <BackButton></BackButton>
        </BarreNavHorizontaleV2>
      </header>
      <div class="pageV2">
        <main>
          <slot></slot>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import BackButton from "@/components/BackButton.vue"
import BarreNavHorizontaleV2 from "@/components/BarreNavHorizontaleV2.vue"
import Gomme from "@/components/Gomme.vue"
import MenuBurger from "@/components/MenuBurger.vue"

export default {
  name: "PageV2",
  props: [],
  components: {
    BarreNavHorizontaleV2,BackButton,Gomme,MenuBurger,
  },
  methods: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.header {
  height: 100px;
  width: 100%;
  background-color: #8badbe;
}

.MenuBurger {
  display: inline-block;
  flex-direction: row;
  flex-wrap: row;
  width: 10%;
  margin-left: 10px;
  justify-content: center;
  margin-top: 20px;
}
</style>
