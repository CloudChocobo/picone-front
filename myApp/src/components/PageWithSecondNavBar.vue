<!-- template with the FirstNavBar (which has the eraser)-->
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header>
        <SecondNavBar @cancelLastAction="$emit('cancelLastAction')">
        </SecondNavBar>
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
import SecondNavBar from "@/components/SecondNavBar.vue";

export default {
  name: "PageWithSecondNavBar",
  props: [],
  components: {
    SecondNavBar,
  },
  emits: ["cancelLastAction"],
};
</script>

<style scoped>
</style>
