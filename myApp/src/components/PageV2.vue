
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
  name: "PageV2",
  props: [],
  components: {
    SecondNavBar,
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
