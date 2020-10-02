//BaseHeader的背景
<template>
  <div class="Background">
      <Header-down></Header-down>
  </div>
</template>

<script>

import HeaderDown from "../common/HeaderDown"
export default {
  components: {
    HeaderDown
  },
  computed: {

  },
};
</script>

<style scoped>
.Background{
    width: 100%;
    height: 100vh;
    background-color: rgb(34,34,34);
    position: absolute;
}
</style>