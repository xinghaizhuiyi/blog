//首页的首屏
<template>
  <div class="HeaderBox">
    <Header-canvas></Header-canvas>
    <Background></Background>
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
  computed: {
  },
  
};
</script>

<style scoped>
</style>