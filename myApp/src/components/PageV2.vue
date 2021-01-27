
<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header>
        <BarreNavHorizontaleV2 @cancelLastAction="$emit('cancelLastAction')">
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
import BarreNavHorizontaleV2 from "@/components/BarreNavHorizontaleV2.vue";

export default {
  name: "PageV2",
  props: [],
  components: {
    BarreNavHorizontaleV2,
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
