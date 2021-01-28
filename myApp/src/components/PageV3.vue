
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header>
        <BarreNavHorizontaleV3></BarreNavHorizontaleV3>
      </header>
      <div class="pageV3">
        <main>
          <slot></slot>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import BarreNavHorizontaleV3 from "@/components/BarreNavHorizontaleV3.vue";

export default {
  name: "PageV3",
  props: [],
  components: {
    BarreNavHorizontaleV3,
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
