<template>
  <el-dialog v-model="showLocationAdd" title="Tips" width="30%">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showLocationAdd = false">Cancel</el-button>
        <el-button type="primary"> Add </el-button>
      </span>
    </template>
  </el-dialog>
  <el-button type="primary" @click="showLocationAdd = true"
    >Add new location</el-button
  >
</template>

<script>
export default {
  name: "ClLocation",
  data() {
    return {
      showLocationAdd: false,
    };
  },
  watch: {
    baseInformation: {
      deep: true,
      handler() {
        this.setBaseLocation();
      },
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
