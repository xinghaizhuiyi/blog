//首屏的翻页键
<template>
  <div @click="showClick" class="HeaderDown">
    <Svg-down class="svg"></Svg-down>
  </div>
</template>

<script>
import SvgDown from "./svg/SvgDown";
export default {
  components: {
    SvgDown,
  },
  methods: {
    showClick() {
      this.$store.commit("sidebarshow");
    },
  },
};
</script>

<style scoped>
.HeaderDown {
  position: absolute;
  left: 50%;
  margin-left: -50px;
  bottom: 0;
  z-index: 1;
  width: 100px;
  height: 100px;
}
</style>