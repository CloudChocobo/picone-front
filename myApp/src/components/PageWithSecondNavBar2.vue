<!-- template with the FirstNavBar (which has the eraser)-->
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header>
        <SecondNavBar2 @cancelLastAction="$emit('cancelLastAction')">
        </SecondNavBar2>
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
import SecondNavBar2 from "@/components/SecondNavBar2.vue";

export default {
  name: "PageWithSecondNavBar2",
  props: [],
  components: {
    SecondNavBar2,
  },
  emits: ["cancelLastAction"],
};
</script>

<style scoped>
.header {
  height: 100px;
  width: 100%;
  background-color: #8badbe;
}
</style>
