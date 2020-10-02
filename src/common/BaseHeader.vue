//首页的首屏
<template>
  <div class="HeaderBox">
    <Background></Background>
    <Header-canvas></Header-canvas>
  </div>
</template>

<script>
import Background from "../common/Background";
import HeaderCanvas from "../common/HeaderCanvas";
export default {
  components: {
    Background,
    HeaderCanvas,
  },
  computed: {},
};
</script>

<style scoped>
.HeaderBox {
  z-index: 2;
}
</style>