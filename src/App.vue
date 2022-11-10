<template>
  <cl-navigation />
  <component :is="layout" />
</template>

<script>
import ClNavigation from "@/components/ClNavigation";

import DefaultLayout from "@/layouts/default.vue";
import AppLayout from "@/layouts/app.vue";

export default {
  name: "App",
  components: {
    ClNavigation,
    DefaultLayout,
    AppLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "default") + "-layout";
    },
  },
};
</script>
