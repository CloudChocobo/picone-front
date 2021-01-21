
<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="page">
        <MenuAdmin>testtesttest</MenuAdmin>
        <main>
          <slot></slot>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import MenuAdmin from "@/components/MenuAdmin.vue";
export default {
  name: "PageAdmin",
  props: [],
  components: {
    MenuAdmin,
  },
  methods: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.MenuAdmin {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 10%;
  background: #8badbe;
}
</style>