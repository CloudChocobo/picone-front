<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header>
        <HomeNavBar></HomeNavBar>
      </header>
      <div class="PageWithHomeNavBar">
        <main>
          <slot></slot>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import HomeNavBar from "@/components/HomeNavBar.vue";

export default {
  name: "PageWithHomeNavBar",
  props: [],
  components: {
    HomeNavBar,
  },
};
</script>

<style scoped>
.header {
  height: 100px;
  width: 100%;
  background-color: #8badbe;
}
</style>
