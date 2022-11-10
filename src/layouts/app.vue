<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppLayout",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;

  &-fade-enter-active,
  &-fade-leave-active {
    transition-duration: 0.4s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  &-fade-enter,
  &-fade-leave-active {
    opacity: 0;
  }
}
</style>
