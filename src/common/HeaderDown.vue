//首屏的翻页键
<template>
  <div class="DownBox">
    <div @click="showClick" class="HeaderDown">
      <div >
        <Svg-down class="svg"></Svg-down>
      </div>
    </div>
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
.DownBox {
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0px;
}
.HeaderDown {
  display: inline-block;
  margin: auto auto 0;
  width: 100px;
  height: 100px;
}

</style>