<!-- template with the FirstNavBar (which has no eraser)-->
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header>
        <FirstNavBar></FirstNavBar>
      </header>
      <div class="PageWithFirstNavBar">
        <main>
          <slot></slot>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import FirstNavBar from "@/components/FirstNavBar.vue";

export default {
  name: "PageWithFirstNavBar",
  props: [],
  components: {
    FirstNavBar,
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
