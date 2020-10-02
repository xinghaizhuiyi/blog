//首页的首屏
<template>
  <div class="HeaderBox">
    <Background></Background>
    <Header-canvas></Header-canvas>
    <Header-down></Header-down>
  </div>
</template>

<script>
import Background from "../common/Background";
import HeaderCanvas from "../common/HeaderCanvas";
import HeaderDown from "../common/HeaderDown"
export default {
  components: {
    Background,
    HeaderCanvas,
    HeaderDown
  },
  computed: {

  },
};
</script>

<style scoped>
.HeaderBox{
    z-index: 0;
}
</style>