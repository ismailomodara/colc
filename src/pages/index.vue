<template>
  <cl-header @update-base-information="updateBaseInformation" />
  <cl-table :base-information="baseInformation" />
</template>

<script>
import ClTable from "@/components/Home/ClTable";
import ClHeader from "@/components/Home/ClHeader";

export default {
  name: "AppIndex",
  components: {
    ClHeader,
    ClTable,
  },
  data() {
    return {
      baseInformation: null
    };
  },
  methods: {
    updateBaseInformation(information) {
      this.baseInformation = information;
    },
  },
};
</script>

<style lang="scss"></style>
