
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header>
        <BarreNavHorizontale></BarreNavHorizontale>
      </header>
      <div class="page">
        <main>
          <slot></slot>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import BarreNavHorizontale from "@/components/BarreNavHorizontale.vue";
export default {
  name: "Page",
  props: [],
  components: {
    BarreNavHorizontale,
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
</style>
