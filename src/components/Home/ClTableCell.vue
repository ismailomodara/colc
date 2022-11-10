<template>
  <p class="el-input--value fadeIn" v-if="!editing" @click="startEditing">
    {{ setValue }}
  </p>
  <el-input
    v-else
    v-model="setValue"
    ref="input"
    type="text"
    class="el-input--editable fadeIn"
    @keydown="validateAmount"
    @blur="endEditing"
  />
</template>

<script>
import { validateAmount } from "@/utils";

export default {
  name: "ClTableCell",
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      editing: false,
    };
  },
  computed: {
    setValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update:value", value);
      },
    },
  },
  methods: {
    startEditing() {
      this.editing = true;
      setTimeout(() => {
        this.$refs.input.focus();
      }, 100);
    },
    validateAmount,
    endEditing() {
      if (!this.setValue) {
        this.setValue = 0;
      }
      this.$emit("updated");
      this.editing = false;
    },
  },
};
</script>

<style lang="scss">
.el-input--value {
  color: var(--cl-text-primary);
  font-weight: 500;
  padding-left: 10px;
  font-size: 1rem;
  line-height: 40px;
}

.el-input--editable {
  .el-input__wrapper {
    background-color: var(--cl-blue-background);
    color: var(--cl-text-primary);
    height: 40px;
    border-radius: 0;
    font-family: "Figtree", sans-serif;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.25s ease-out;

    .el-input__inner {
      font-weight: 600;
      font-size: 1.125rem;
      padding-left: 5px;
      font-family: "Figtree", sans-serif;
      color: var(--cl-text-primary);
      background-color: var(--cl-blue-background);
    }
  }
}
</style>
